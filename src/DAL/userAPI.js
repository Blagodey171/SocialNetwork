import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7838f7f6-847b-47bf-bf04-5483b2224cca'
    }
});

export const getUsers = (currentPage, sizePage) => {
    return instance.get(`users?page=${currentPage}&count=${sizePage}`)
        .then(response => response.data)
}

export const follow = (id) => {
    return instance.post(`follow/${id}`)
        .then(response => response.data)
}

export const unfollow = (id) => {
    return instance.delete(`follow/${id}`)
        .then(response => response.data)
}