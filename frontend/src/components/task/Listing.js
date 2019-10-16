import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios-instance';

const Listing = (props) => {

    const [tasks, setTasks] = useState([]);
    const [alertSuccess, setAlertSuccess] = useState(null);

    useEffect(() => {
        axios.get('/tasks').then(res => {
            setTasks(res.data.data);
        });
    }, []);

    /**
     * Delete task handler
     * @param id
     * @param index
     */
    const onDeleteHandler = (id, index) => {
        axios.delete('/tasks/'+id).then(res => {
            const {data} = res.data;
            let updatedTasks = [...tasks];
            updatedTasks.splice(index, 1);
            setAlertSuccess(data.message);
            setTasks(updatedTasks);
        });
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <div className="text-center">
                        <h2>Tasks</h2>
                    </div>
                    <div className="text-right m-4">
                        <Link to="/tasks/create" className="btn btn-info btn-sm">Create Task</Link>
                    </div>
                </div>
            </div>

            {alertSuccess ? (<div className="alert alert-success">
                <strong>Success!</strong> {alertSuccess}
            </div>) : null}

            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th colSpan="2">Description</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tasks.map((task,index) => (
                            <tr key={task.id}>
                                <td>{task.title}</td>
                                <td colSpan="2">{task.description}</td>
                                <td>
                                    <Link to={"/tasks/"+task.id+"/edit"} className="btn btn-primary btn-sm">Edit</Link>
                                    <button className="btn btn-danger btn-sm ml-1" onClick={() => onDeleteHandler(task.id,index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

}




export default Listing;