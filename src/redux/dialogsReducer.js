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
// переработать dialogsBlock, чтобы добавлять сообщения
let dialogsReducer = (state = initialStore, action) => {
    switch(action.type) {
        case CHANGE_TEXTAREA_DIALOGS:
            // state.dialogsPage.dialogsBlock
            return state;
        case ADD_MESSAGE:

            return state;

    }
    return state;
}

export const addPost = () => {
    return {
        type: ADD_MESSAGE,
    }
};

export const changeTextareaValue = (value) => {
    return {
        type: CHANGE_TEXTAREA_DIALOGS,
        text: value,
    }
};
export default dialogsReducer;