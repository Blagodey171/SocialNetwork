const ADD_MESSAGE = 'ADD-MESSAGE';

let initialStore = {

    dialogsBlock: [
        { id: 1, name: 'Danil', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', link: '/messages/Danil', chatTextareaValue: '', text: ['hello'] },
        { id: 2, name: 'Vika', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', link: '/messages/Vika', chatTextareaValue: '', text: [] },
        { id: 3, name: 'Jasmine', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', link: '/messages/Jasmine', chatTextareaValue: '', text: [] },
        { id: 4, name: 'Zhenya', img: 'https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg', link: '/messages/Zhenya', chatTextareaValue: '', text: [] },
    ],

}

let dialogsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.dialogsBlock.find(friend => {
                if(friend.name === action.name) {
                    friend.text = [...friend.text, action.text]
                }
            })
            return {
                dialogsBlock: [...state.dialogsBlock]
            }
        default:
            return state;



    }

}

export const addPost = (name, text) => {
    return {
        type: ADD_MESSAGE,
        name,
        text,
    }
};

export default dialogsReducer;