import axios from 'axios';
export const client = (token = null) => {
    const defaultOptions = {
        headers: {
            common: {
                Authorization: token ? `Bearer ${token}` : '',
            },
            post: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        },
    };
    return {
        get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }).then((data)=>data),
        post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
        put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
        delete: (url, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
    };
};

export const request = client(sessionStorage.getItem('token'));


export default {
    request,
};