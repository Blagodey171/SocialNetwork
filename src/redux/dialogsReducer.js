/* eslint-disable default-case */
const CHANGE_TEXTAREA_VALUE = 'CHANGE-TEXTAREA-VALUE';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialStore = {

    dialogsBlock: [
        { id: 1, name: 'Danil', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', link: '/messages/Danil', chatTextareaValue: '' },
        { id: 2, name: 'Vika', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', link: '/messages/Vika', chatTextareaValue: '' },
        { id: 3, name: 'Jasmine', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', link: '/messages/Jasmine', chatTextareaValue: '' },
        { id: 4, name: 'Zhenya', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', link: '/messages/Zhenya', chatTextareaValue: '' },
    ],
    messages: ['234', 'afwrg', 'sdgetgwdvergb'],
    textareaValue: '1',

}

let dialogsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case CHANGE_TEXTAREA_VALUE:
            return {
                ...state,
                textareaValue: action.text,
            }


        case ADD_MESSAGE:
            let newMessage = state.textareaValue;
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state;



    }

}

export const addPost = () => {
    return {
        type: ADD_MESSAGE,
    }
};

export const changeTextareaValue = (value) => {
    return {
        type: CHANGE_TEXTAREA_VALUE,
        text: value,
    }
};
export default dialogsReducer;