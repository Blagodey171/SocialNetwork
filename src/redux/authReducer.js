import { auth } from '../DAL/authAPI';
import { login } from '../DAL/authAPI';
import { logout } from '../DAL/authAPI';

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
                ...action.payload,
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

export const authThunkCreator = () => {
    return (dispatch) => {
        auth().then(data => {
            console.log(data)
            if (data.resultCode === 0) {
                let {email, id, login} = data.data
                dispatch(setAuthProfileAC(id, email, login, true))
            } 
        })
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        login(email, password, rememberMe)
            .then(response => {
                console.log(response)

                if (response.data.resultCode === 0) dispatch(authThunkCreator())
            })
    }
}
export const logoutThunkCreator = () => {
    return (dispatch) => {
        debugger
        logout().then(response => {
            console.log(response)
                if (response.data.resultCode === 0) dispatch(setAuthProfileAC(null, null, null, false))
            })
    }
}

export default authReducer;