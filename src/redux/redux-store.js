import {createStore, combineReducers} from 'redux';
import profileReducer from '../redux/profileReducer';
import dialogsReducer from '../redux/dialogsReducer';
import sidebarReducer from '../redux/sidebarReducer';
import friendsReducer from '../redux/friendsReducer';
import authReducer from '../redux/authReducer';


let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer, 
    friendsReducer,
    authReducer,
})

let store = createStore(reducers);
window.store = store;

export default store;