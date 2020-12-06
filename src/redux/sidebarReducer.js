let initialState = {

    link: [
        { path: '/friend', name: 'Друзья' },
        { path: '/messages', name: 'Диалоги' },
        { path: '/profile', name: 'Профиль' },
        { path: '/news', name: 'Новости' },
        { path: '/music', name: 'Музыка' },
        { path: '/settings', name: 'Настройки' },
        { path: '/login', name: 'Логин' },
    ],

}

let sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;