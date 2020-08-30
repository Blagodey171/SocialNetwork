const ADD_POST_TYPE = 'ADD-POST';
const CHANGE_TEXTAREA_VALUE = 'CHANGE-TEXTAREA-VALUE';

let initialStore = {
    posts: [
        {author: 'Danil', text: 'Hi, this is JS', likesCount: 1},
        {author: 'Jasmine', text: 'Hi, this is ReactJS', likesCount: 2},
        {author: 'Vika', text: 'Hi, this is Redux', likesCount: 4},
    ],
    textareaState: '',
}

let profileReducer = (state = initialStore, action) => {
    switch(action.type) {
        case ADD_POST_TYPE:
            let newPost = {
                author: 'Name',
                text: state.textareaState,
                likesCount: 0,
            }
            state.posts.push(newPost);
            return state;

        case CHANGE_TEXTAREA_VALUE: 
            state.textareaState = action.text;
            return state;
        default :
            return state;
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
export default profileReducer;