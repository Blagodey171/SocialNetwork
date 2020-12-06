import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/',
    headers: {
        'API-KEY': '7838f7f6-847b-47bf-bf04-5483b2224cca'
    }
});

export const getProfileStatus = async (userId) => {
    return await instance.get(`status/${userId}`)
        .then(response => response.data)
}

export const putProfileStatus = async (status, id) => {
    return await instance.put(`status`, {status})
        .then (response => response.data)
        
}

// 12389