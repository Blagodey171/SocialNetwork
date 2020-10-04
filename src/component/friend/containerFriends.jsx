import {connect} from 'react-redux';
import FriendsC from './friendsС.jsx';
import {subscribeAC, setUsersAC, setTotalUsersCountAC, setCurrentPageAC} from '../../redux/friendsReducer';

let mapStateToProps = (state) => {
    return {
        users: state.friendsReducer.users,
        totalUsersCount: state.friendsReducer.totalUsersCount,
        sizePage: state.friendsReducer.sizePage,
        currentPage: state.friendsReducer.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (userId) => {
            dispatch(subscribeAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setCurrentPage: (numberPage) => {
            dispatch(setCurrentPageAC(numberPage))
        },

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(FriendsC)