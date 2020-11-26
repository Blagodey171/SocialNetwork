import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/status/',
    headers: {
        'API-KEY': '7838f7f6-847b-47bf-bf04-5483b2224cca'
    }
});

export const getProfileStatus = (userId) => {
    return instance.get(`${userId}`)
        .then(response => response.data)
}

// 12389