const ADD_POST_TYPE = 'ADD-POST';
const CHANGE_PROFILE_TEXTAREA_VALUE = 'CHANGE-PROFILE-TEXTAREA-VALUE';
const SET_PROFILE = 'SET-PROFILE';

let initialStore = {
    posts: [
        { author: 'Danil', text: 'Hi, this is JS', likesCount: 1 },
        { author: 'Jasmine', text: 'Hi, this is ReactJS', likesCount: 2 },
        { author: 'Vika', text: 'Hi, this is Redux', likesCount: 4 },
    ],
    postTextareaValue: 'khlfkgj',
    profile: null,

    // {
    //     aboutMe: "я круто чувак 1001%",
    //     contacts: {
    //       facebook: "facebook.com",
    //       website: null,
    //       vk: "vk.com/dimych",
    //       twitter: "https://twitter.com/@sdf",
    //       instagram: "instagra.com/sds",
    //       youtube: null,
    //       github: "github.com",
    //       mainLink: null
    //     },
    //     lookingForAJob: true,
    //     lookingForAJobDescription: "не ищу, а дурачусь",
    //     fullName: "samurai dimych",
    //     userId: 2,
    //     photos: {
    //       small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
    //       large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
    //     }
    //   },
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
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
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

export const setProfileAC = (profile) => {
    return {
        type: SET_PROFILE,
        profile,
    }
}
export default profileReducer;