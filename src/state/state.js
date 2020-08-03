const ADD_POST_TYPE = 'ADD-POST';
const CHANGE_TEXTAREA_VALUE = 'CHANGE-TEXTAREA-VALUE';

let store = {

    dispatch (action) {
        if (action.type === ADD_POST_TYPE) {
            this.addPost()
        } else if (action.type === CHANGE_TEXTAREA_VALUE) {
            this.changeTextareaValue(action.text)
        }
    },

    

    addPost ()  {
        let newPost = {
            author: 'Name',
            text: this._state.textareaState,
            likesCount: 0,
        }
        this._state.posts.push(newPost);
        this._rerender(this._state);
    },
    changeTextareaValue (value)  {
        
        this._state.textareaState = value;
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
    },
    _chat1: {
        messages: [
            {text: 'hi',flag: 'user',}
        ]


    }
    
    
}

export const addPostObject = () => {
    return {
        type: ADD_POST_TYPE,
    }
};

export const changeTextareaValueObject = (value) => {
    return {
        type: CHANGE_TEXTAREA_VALUE,
        text: value,
    }
};


export default store;