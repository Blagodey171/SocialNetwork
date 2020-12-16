import {authThunkCreator} from './authReducer'
const INITIALIZE_APP = 'INITIALIZE-APP';


let initialState = {
    initialize: false,
}


let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_APP :
            return {
                ...state,
                initialize: true
            }
        default:
            return state;
    }
}

export const initializeAC = () => {
    return {
        type: INITIALIZE_APP,
    }
}

export const initializeThunkCreator = () => (dispatch) => {
    dispatch(authThunkCreator()).then(() => {
        dispatch(initializeAC())
    })
} 

export default appReducer;