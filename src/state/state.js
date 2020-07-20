import {rerender} from '../rerender';
let state = {
    dialogs: [
        {id: 1, name: 'Danil', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg'},
        {id: 2, name: 'Vika', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg'},
        {id: 3, name: 'Jasmine', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg'},
        {id: 4, name: 'Zhenya', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg'},
    ],
    link: [
        {path: '/friend', name: 'Друзья'},
        {path: '/messages', name: 'Диалоги'},
        {path: '/profile', name: 'Профиль'},
        {path: '/news', name: 'Новости'},
        {path: '/music', name: 'Музыка'},
        {path: '/settings', name: 'Настройки'},
    ],
    posts: [
        {author: 'Danil', text: 'Hi, this is JS', likesCount: 1},
        {author: 'Jasmine', text: 'Hi, this is ReactJS', likesCount: 2},
        {author: 'Vika', text: 'Hi, this is Redux', likesCount: 4},
    ]
}

export function addPost (message) {
    let newPost = {
        author: 'Name',
        text: message,
        likesCount: 0,
    }

    state.posts.push(newPost);
    rerender(state);
}
export default state;