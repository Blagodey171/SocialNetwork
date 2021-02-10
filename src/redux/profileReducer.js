import { setProfile } from '../DAL/profileAPI';
import { getProfileStatus, putProfileStatus } from '../DAL/profileStatusAPI';
import { auth } from '../DAL/authAPI';
const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const GET_PROFILE_STATUS = 'GET_PROFILE_STATUS';

let initialStore = {
    posts: [
        { author: 'Danil', text: 'Hi, this is JS', likesCount: 1 },
        { author: 'Jasmine', text: 'Hi, this is ReactJS', likesCount: 2 },
        { author: 'Vika', text: 'Hi, this is Redux', likesCount: 4 },
    ],
    profile: null,
    status: '',
}

let profileReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                author: 'Name',
                text: action.text,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case GET_PROFILE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }

}

export const addPostAC = (text) => {
    return {
        type: ADD_POST,
        text
    }
};

export const setProfileAC = (profile) => {
    return {
        type: SET_PROFILE,
        profile,
    }
}

export const getProfileStatusAC = (status) => {
    return {
        type: GET_PROFILE_STATUS,
        status,
    }
}

export const setProfileThunkCreator = (userId) => {
    return (dispatch) => {
        if (userId) {
            setProfile(userId).then(data => {
                dispatch(setProfileAC(data));
            })
        } else {
            auth().then(data => {
                setProfile(data.data.id).then(data => {
                    dispatch(setProfileAC(data));
                })
            })
        }

    }
}

export const getProfileStatusThunkCreator = (userId) => {
    return (dispatch) => {
        if (userId) {
            getProfileStatus(userId).then(status => {
                dispatch(getProfileStatusAC(status));
            })
        } else {
            auth().then(data => {
                getProfileStatus(data.data.id).then(data => {
                    dispatch(getProfileStatusAC(data));
                })
            })
        }

    }
}

export const putProfileStatusThunkCreator = (status) => {
    return (dispatch) => {
        putProfileStatus(status)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(getProfileStatusAC(status))
                }
            })
    }
}


export default profileReducer;