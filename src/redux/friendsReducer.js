const SUBSCRIBE = 'SUBSCRIBE';
const SET_USERS = 'SET-USERS';

let initialState = {

    users: [
        // {
        //     id: 1,
        //     follow: true,
        //     name: 'Zhenya',
        //     avatar: 'https://funpick.ru/wp-content/cache/thumb/fc0a2f150_320x200.jpg',
        //     status: 'hey, i am learn JS',
        //     navigation: { country: 'Russia', city: 'Novosibirsk' }
        // },
        // {
        //     id: 2,
        //     follow: false,
        //     name: 'Jasmin',
        //     avatar: 'https://funpick.ru/wp-content/cache/thumb/fc0a2f150_320x200.jpg',
        //     status: 'hey, i am learn Python',
        //     navigation: { country: 'Russia', city: 'Novosibirsk' }
        // },
        // {
        //     id: 3,
        //     follow: true,
        //     name: 'Vika',
        //     avatar: 'https://funpick.ru/wp-content/cache/thumb/fc0a2f150_320x200.jpg',
        //     status: 'hey!',
        //     navigation: { country: 'Russia', city: 'Novosibirsk' }
        // },
    ]
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
            
            debugger 
            return {
                ...state,
                users: [...state.users].concat(action.users)
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

export default friendsReducer;