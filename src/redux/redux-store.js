import {createStore, combineReducers} from 'redux';
import profileReducer from '../redux/profileReducer';
import dialogsReducer from '../redux/dialogsReducer';
import sidebarReducer from '../redux/sidebarReducer';
import friendsReducer from '../redux/friendsReducer';

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer, 
    friendsReducer,
})

let store = createStore(reducers);

export default store;