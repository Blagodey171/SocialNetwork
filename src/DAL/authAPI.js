import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/me',
    headers: {
        'API-KEY': '7838f7f6-847b-47bf-bf04-5483b2224cca'
    }
});

export const auth = () => {
    return instance.get()
        .then(response => response.data)
}