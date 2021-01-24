import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import profileReducer from '../redux/profileReducer';
import dialogsReducer from '../redux/dialogsReducer';
import sidebarReducer from '../redux/sidebarReducer';
import friendsReducer from '../redux/friendsReducer';
import authReducer from '../redux/authReducer';
import appReducer from '../redux/appReducer';
import coruselReducer from '../redux/coruselReducer';


let reducers = combineReducers({
    appReducer,
    profileReducer,
    dialogsReducer,
    sidebarReducer, 
    friendsReducer,
    authReducer,
    coruselReducer
})

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;