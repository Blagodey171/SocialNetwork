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
const getUsers = (state) => {
    return state.friendsReducer.users;
}
export const getUsersCards = createSelector(getUsers,getDisabledButtonFollow, (users, disabledBtn) => {
    // висит событие на кнопке отписки , при нажатии санка выполняется, но кнопка не меняется. ререндера не будет,видимо потому что сам массив пользователей не тронут(только внутреннее поле объекта пользователя)
    console.log('render')
    return users.map(user =>
        
        <div className='user-card' >
            <div className='user-card__avatar'>
                <NavLink to={`profile/${user.id}`}>
                    <img src={user.photos.small || Avatar} alt="" className='user-card__avatar-photo'/>
                </NavLink>
                {
                    user.followed
                    ? <button id={user.id} disabled = {disabledBtn.some(userId => userId === user.id)} className='user-card__follow unfollow'>Отписка</button> 
                    : <button id={user.id} disabled = {disabledBtn.some(userId => userId === user.id)} className='user-card__follow follow'>Подписка</button>
                }
            </div>
            <div className='user-card__info' >
                <div className='user-card__name'>
                    {user.name}
                </div>
                <div className='user-card__navigation'>
                    {user.navigation || 'Russia'}
                </div>
            </div>
        </div>
    )
})


