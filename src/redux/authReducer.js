import { auth } from '../DAL/authAPI';
const SET_AUTH_PROFILE = 'SET-AUTH-PROFILE';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_PROFILE : 
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default : 
            return state;    
    }
    
}

export const setAuthProfileAC = (data) => {
    return {
        type: SET_AUTH_PROFILE,
        data: {...data}
    }
}

export const authThunkCreator = () => {
    return (dispatch) => {
        auth().then(data => {
            console.log(data)
            if (data.resultCode === 0) {
                dispatch(setAuthProfileAC(data.data))
            }
        })
    }
}

export default authReducer;