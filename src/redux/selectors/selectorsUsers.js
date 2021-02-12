import { createSelector } from 'reselect';
import { NavLink } from 'react-router-dom';

import Avatar from '../../img/avatar/cat.png';

export const getTotalUsersCount = (state) => {
    return state.friendsReducer.totalUsersCount
}
export const getSizePage = (state) => {
    return state.friendsReducer.sizePage
}
export const getCurrentPage = (state) => {
    return state.friendsReducer.currentPage
}
const getDisabledButtonFollow = (state) => {
    return state.friendsReducer.disabledButtonFollow
}
export const getUsers = (state) => {
    return state.friendsReducer.users;
}



