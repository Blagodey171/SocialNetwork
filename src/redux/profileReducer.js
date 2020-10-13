const ADD_POST_TYPE = 'ADD-POST';
const CHANGE_PROFILE_TEXTAREA_VALUE = 'CHANGE-PROFILE-TEXTAREA-VALUE';

let initialStore = {
    posts: [
        { author: 'Danil', text: 'Hi, this is JS', likesCount: 1 },
        { author: 'Jasmine', text: 'Hi, this is ReactJS', likesCount: 2 },
        { author: 'Vika', text: 'Hi, this is Redux', likesCount: 4 },
    ],
    postTextareaValue: '',

}

let profileReducer = (state = initialStore, action) => {
    switch(action.type) {
        case ADD_POST_TYPE: {
            let newPost = {
                author: 'Name',
                text: state.postTextareaValue,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                postTextareaValue: '',
            };
        }    

        case CHANGE_PROFILE_TEXTAREA_VALUE: {
            return {
                ...state,
                postTextareaValue: action.text
            };
        }    
        default :
            return state;
    }
    
}

export const addPostAC = () => {
    return {
        type: ADD_POST_TYPE,
    }
};

export const changeTextareaValueAC = (value) => {
    return {
        type: CHANGE_PROFILE_TEXTAREA_VALUE,
        text: value,
    }
};
export default profileReducer;