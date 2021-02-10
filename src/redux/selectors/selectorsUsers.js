import { createSelector } from 'reselect';

export const getTotalUsersCount = (state) => {
    return state.friendsReducer.totalUsersCount
}
export const getSizePage = (state) => {
    return state.friendsReducer.sizePage
}
export const getCurrentPage = (state) => {
    return state.friendsReducer.currentPage
}
export const getUsers = (state) => {
    return state.friendsReducer.users;
}
// export const getModefiedUsersArray = createSelector(getUsers, getTotalUsersCount, getSizePage, getCurrentPage,  (users, usersCount, sizePage, currentPage) => {
//     let totalPages = Math.ceil(usersCount / sizePage);
//     let arrPages = [];

//     for (let i = 1; i <= totalPages; i++) arrPages.push(i);

//     return arrPages.map(el => <span onClick={(e) => { this.setPage(el) }} className={`page-number-container ${currentPage === el && 'selected'}`} ><span id={el} className={`pageNumber `}>{el}</span></span>);
// })

