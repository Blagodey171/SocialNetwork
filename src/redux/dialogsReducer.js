/* eslint-disable default-case */
const CHANGE_TEXTAREA_DIALOGS = 'CHANGE-TEXTAREA-DIALOGS';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialStore = {
    dialogsPage: {
        dialogsBlock: [
            {id: 1, name: 'Danil', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', text: [], link: '/messages/Danil' },
            {id: 2, name: 'Vika', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', text: [], link: '/messages/Vika'},
            {id: 3, name: 'Jasmine', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', text: [], link: '/messages/Jasmine'},
            {id: 4, name: 'Zhenya', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', text: [], link: '/messages/Zhenya'},
        ],
    },
}

let dialogsReducer = (state = initialStore, action) => {
    switch(action.type) {
        case CHANGE_TEXTAREA_DIALOGS:
            state.find((el) => {
                if (el.name === action.name) {
                    el.chatTextareaValue = action.text;
                    return true;
                }
                return false;
            })
            return state;
        case ADD_MESSAGE:
            state.find((el) => {
                if (el.name === action.name) {
                    el.text.push(el.chatTextareaValue)
                    return true;
                }
                return false;
            })
            return state;
        default: 
            return state;

    }
    
}

export const addPost = (name) => {
    return {
        type: ADD_MESSAGE,
        name: name,
    }
};

export const changeTextareaValue = (value, name) => {
    return {
        type: CHANGE_TEXTAREA_DIALOGS,
        text: value,
        name: name,
    }
};
export default dialogsReducer;