import {createStore, combineReducers} from 'redux';
import profileReducer from '../redux/profileReducer';
import dialogsReducer from '../redux/dialogsReducer';
import sidebarReducer from '../redux/sidebarReducer';


let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer, 
})

let store = createStore(reducers);

export default store;