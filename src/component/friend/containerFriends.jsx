import React from 'react';
import { connect } from 'react-redux';
import { unfollowThunkCreator, followThunkCreator, getUsersThunkCreator, setPageThunkCreator, } from '../../redux/friendsReducer';
import { getTotalUsersCount, getUsers, getSizePage, getCurrentPage } from '../../redux/selectors/selectorsUsers';
import Friends from './friends';
import { compose } from 'redux';

class FriendsClassComponent extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0){
            this.props.getUsersThunkCreator(this.props.currentPage, this.props.sizePage)
        }
    }

    setPage = (page) => {
        this.props.setPageThunkCreator(page, this.props.sizePage);
    }


    pages = () => {
        let totalPages = Math.ceil(this.props.totalUsersCount / this.props.sizePage);
        let arrPages = [];

        for(let i = 1; i <= totalPages; i++) arrPages.push(i);

        return arrPages.map(el => <span  onClick={(e) => {this.setPage(el)}} className={`page-number-container ${this.props.currentPage === el && 'selected'}`} ><span id={el} className={`pageNumber `}>{el}</span></span>);
    }

    

    render() {
        return <Friends users={this.props.users} disabledButtonFollow={this.props.disabledButtonFollow} pages={this.pages()} isFetching={this.props.isFetching} />
    }
}



let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        sizePage: getSizePage(state),
        currentPage: getCurrentPage(state),
        isFetching: state.friendsReducer.isFetching,
        disabledButtonFollow: state.friendsReducer.disabledButtonFollow,
    }
}

export default compose(
    connect(mapStateToProps, {
        unfollowThunkCreator,
        followThunkCreator,
        getUsersThunkCreator,
        setPageThunkCreator,
    }),
)(FriendsClassComponent)

 