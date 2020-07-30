
let store = {
    addPost ()  {
        let newPost = {
            author: 'Name',
            text: store.textareaState,
            likesCount: 0,
        }
        store.posts.push(newPost);
        store.rerender(store);
    },
    changeTextareaValue (value)  {
        
        store.textareaState = value;
        store.rerender(store);
    },
    subscriber (observer) {
        store.rerender = observer;
    },
    rerender () {
        console.log('hello')
    },
    dialogs: [
        {id: 1, name: 'Danil', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', text: '', link: '/messages/Danil' },
        {id: 2, name: 'Vika', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', text: '', link: '/messages/Vika'},
        {id: 3, name: 'Jasmine', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', text: '', link: '/messages/Jasmine'},
        {id: 4, name: 'Zhenya', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', text: '', link: '/messages/Zhenya'},
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
    ],
    textareaState: '',
    
}



export default store;