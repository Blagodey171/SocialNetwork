import profileReducer from '../redux/profileReducer';

let store = {

    dispatch (action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._rerender(this._state);
    },
    
    subscriber (observer) {
        this._rerender = observer;
    },
    _rerender () {
        console.log('hello')
    },
    getState () {
        return this._state;
    },
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Danil', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', text: '', link: '/messages/Danil' },
                {id: 2, name: 'Vika', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', text: '', link: '/messages/Vika'},
                {id: 3, name: 'Jasmine', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', text: '', link: '/messages/Jasmine'},
                {id: 4, name: 'Zhenya', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', text: '', link: '/messages/Zhenya'},
            ],
        },
        profilePage: {
            posts: [
                {author: 'Danil', text: 'Hi, this is JS', likesCount: 1},
                {author: 'Jasmine', text: 'Hi, this is ReactJS', likesCount: 2},
                {author: 'Vika', text: 'Hi, this is Redux', likesCount: 4},
            ],
            textareaState: '',
        },
        sidebar: {
            link: [
                {path: '/friend', name: 'Друзья'},
                {path: '/messages', name: 'Диалоги'},
                {path: '/profile', name: 'Профиль'},
                {path: '/news', name: 'Новости'},
                {path: '/music', name: 'Музыка'},
                {path: '/settings', name: 'Настройки'},
            ],
        },
    },
    _chat1: {
        messages: [
            {text: 'hi',flag: 'user',}
        ]


    }
    
    
}




export default store;