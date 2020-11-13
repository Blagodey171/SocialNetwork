import {follow, unfollow} from '../DAL/userAPI';
const SUBSCRIBE = 'SUBSCRIBE';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_ISFETCHING = 'SET-ISFETCHING';
const SET_DISABLE_BUTTON_FOLLOW = 'SET-DISABLE-BUTTON-FOLLOW';


let initialState = {
    users: [],
    totalUsersCount: 0,
    sizePage: 100,
    currentPage: 1,
    isFetching: false,
    disabledButtonFollow: [],
};

let friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: !user.followed }
                    }
                    return user
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.numberPage
            }
        case SET_ISFETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            }
        case SET_DISABLE_BUTTON_FOLLOW:
            return {
                ...state,
                disabledButtonFollow: action.disabled
                    ? [...state.disabledButtonFollow, action.userId]
                    : state.disabledButtonFollow.filter(userId => userId != action.userId)
            }
        default:
            return state;
    }
}

export const subscribeAC = (userId) => {
    return {
        type: SUBSCRIBE,
        userId: userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}
export const setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount,
    }
}
export const setCurrentPageAC = (numberPage) => {
    return {
        type: SET_CURRENT_PAGE,
        numberPage,
    }
}
export const setValueIsFetchingAC = () => {
    return {
        type: SET_ISFETCHING,
    }
}
export const setDisabledButtonFollowAC = (value, userId) => {
    return {
        type: SET_DISABLE_BUTTON_FOLLOW,
        disabled: value,
        userId,
    }
}

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setDisabledButtonFollowAC(true, userId))
        unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(subscribeAC(userId))
            }
            dispatch(setDisabledButtonFollowAC(false, userId))
        })
    }
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setDisabledButtonFollowAC(true, userId))
        follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(subscribeAC(userId))
            }
            dispatch(setDisabledButtonFollowAC(false, userId))
        })
    }
}

export default friendsReducer;