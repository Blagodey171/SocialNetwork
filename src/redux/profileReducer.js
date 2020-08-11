const ADD_POST_TYPE = 'ADD-POST';
const CHANGE_TEXTAREA_VALUE = 'CHANGE-TEXTAREA-VALUE';

const profileReducer = (state, action) => {
    // eslint-disable-next-line default-case
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