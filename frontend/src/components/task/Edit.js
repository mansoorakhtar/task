import React, { useState, useEffect } from 'react';
import axios from '../../axios-instance';
import PropTypes from 'prop-types';
import classnames from "classnames";
import { connect } from 'react-redux';
import { updateTaskHandler, taskErrorCleanup } from '../../actions/taskActions';

const Edit = (props) => {

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});


    useEffect(() => {
        axios.get('tasks/'+props.match.params.id+'/edit').then(res => {
            const {id,title,description} = res.data.data;
            setId(id);
            setTitle(title);
            setDescription(description);
        });
    }, [props.match.params.id]);


    useEffect(() => {
        if (props.errors) {
            setErrors(props.errors);
        }
    }, [props.errors]);


    useEffect(() => {
        return () => {
            props.taskErrorCleanup();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    /**
     * Update task submit handler
     * @param event
     */
    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.updateTaskHandler({title, description}, id, props.history);
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-sm-6 col-md-8 col-12 col-lg-4">
                    <h2>Update Task ({title})</h2>
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text"
                                   name="title"
                                   value={title}
                                   onChange={event => setTitle(event.target.value)}
                                   className={classnames('form-control', {
                                       'is-invalid' : errors.title
                                   })}

                            />
                            {errors.title && (<div className="invalid-feedback">{errors.title}</div>) }
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea name="description"
                                      value={description}
                                      onChange={event => setDescription(event.target.value)}
                                      className={classnames('form-control', {
                                          'is-invalid' : errors.description
                                      })}
                            >
                            </textarea>
                            {errors.description && (<div className="invalid-feedback">{errors.description}</div>) }
                        </div>

                        <button type="submit" className="btn btn-primary btn-sm">Update</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

Edit.propTypes = {
    errors: PropTypes.object.isRequired,
    updateTaskHandler: PropTypes.func.isRequired,
    taskErrorCleanup: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, { updateTaskHandler, taskErrorCleanup })(Edit);
