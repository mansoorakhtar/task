import axios from 'axios';

export default axios.create({
    baseURL: 'http://task.local/api'
});