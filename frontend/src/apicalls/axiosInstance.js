import axios from 'axios';

// Create an Axios instance with custom configuration
export const axiosInstance = axios.create({
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
})
