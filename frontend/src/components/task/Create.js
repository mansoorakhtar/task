import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { createTaskHandler, taskErrorCleanup } from '../../actions/taskActions';


const Create = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});


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
     * create task submit handler
     */
    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.createTaskHandler({title, description}, props.history);
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-sm-6 col-md-8 col-12 col-lg-4">
                    <h2>Create New Task</h2>
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

                        <button type="submit" className="btn btn-primary btn-sm">Save</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

Create.propTypes = {
    createTaskHandler: PropTypes.func.isRequired,
    taskErrorCleanup: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {createTaskHandler, taskErrorCleanup})(Create);
