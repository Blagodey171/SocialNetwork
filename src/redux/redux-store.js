import {createStore, combineReducers} from 'redux';
import profileReducer from '../redux/profileReducer';

let reducers = combineReducers({
    profileReducer,
})

let store = createStore(reducers);

export default store;