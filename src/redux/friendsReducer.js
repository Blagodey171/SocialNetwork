const SUBSCRIBE = 'SUBSCRIBE';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
let initialState = {

    users: [],
    totalUsersCount: 0,
    sizePage: 10,
    currentPage: 4,

};

let friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, follow: !user.follow }
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
export default friendsReducer;