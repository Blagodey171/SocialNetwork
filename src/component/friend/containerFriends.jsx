import {connect} from 'react-redux';
import Friends from './friends.jsx';
import {subscribeAC, setUsersAC} from '../../redux/friendsReducer';

let mapStateToProps = (state) => {
    return {
        users: state.friendsReducer.users,

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
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Friends)