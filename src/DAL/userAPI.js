import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7838f7f6-847b-47bf-bf04-5483b2224cca'
    }
});

export const getUsers = async (currentPage, sizePage) => {
    let getUsers = await instance.get(`users?page=${currentPage}&count=${sizePage}`)
    return await getUsers.data
}

export const follow = async (id) => {
    let follow = await instance.post(`follow/${id}`);
    return await follow.data;
    
}

export const unfollow = async (id) => {
    let unfollow = await instance.delete(`follow/${id}`)
    return await unfollow.data
}