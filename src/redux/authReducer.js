import { auth } from '../DAL/authAPI';
import { login } from '../DAL/authAPI';
import { logout } from '../DAL/authAPI';

const SET_AUTH_PROFILE = 'SET-AUTH-PROFILE';
const SET_REGISTRATION_ERROR = 'SET-REGISTRATION-ERROR';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    messageForIncorrectRegistration: false,
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_PROFILE : 
            return {
                ...state,
                ...action.payload,
            }
        case SET_REGISTRATION_ERROR : 
            return {
                ...state,
                messageForIncorrectRegistration: action.messageForIncorrectRegistration,
            }
        default : 
            return state;    
    }
    
}



export const setAuthProfileAC = (id, email, login, isAuth) => {
    return {
        type: SET_AUTH_PROFILE,
        payload: {id, email, login, isAuth}
    }
}
export const setRegistrationErrorAC = (message) => {
    return {
        type: SET_REGISTRATION_ERROR,
        messageForIncorrectRegistration: message,
    }
}
export const authThunkCreator = () => (dispatch) => {
        return auth().then(data => {
            if (data.resultCode === 0) {
                let {email, id, login} = data.data
                dispatch(setAuthProfileAC(id, email, login, true))
            } 
        })
}


export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        login(email, password, rememberMe)
            .then(response => {
                console.log(response.data)
                if (response.data.resultCode === 0) {
                    dispatch(authThunkCreator())
                } else {
                    let message = response.data.messages.length > 0 && response.data.messages[0];
                    dispatch(setRegistrationErrorAC(message))
                }
            })
    }
}
export const logoutThunkCreator = () => {
    return (dispatch) => {
        logout().then(response => {
            console.log(response)
                if (response.data.resultCode === 0) dispatch(setAuthProfileAC(null, null, null, false))
            })
    }
}

export default authReducer;