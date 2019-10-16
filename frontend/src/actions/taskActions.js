import axios from '../axios-instance';
import { GET_ERRORS } from './types';

/**
 * Task Previous error cleanup
 *
 * @return {Function}
 */
export const taskErrorCleanup = () => dispatch => {
    dispatch({
        type: GET_ERRORS,
        payload: {}
    });
}

/**
 * Create new task and redirect to listing
 *
 * @param data
 * @param history
 * @returns {Function}
 */
export const createTaskHandler = (data, history) => dispatch => {
    axios.post('/tasks', data)
        .then(res => history.push('/'))
        .catch(error =>
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data.errors
            })
        );
}

/**
 * Update task details and redirect to listing
 *
 * @param data
 * @param id
 * @param history
 * @returns {Function}
 */
export const updateTaskHandler = (data, id, history) => dispatch => {
    axios.put('/tasks/'+id, data)
        .then(res => history.push('/'))
        .catch(error =>
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data.errors
            })
        );
}
