import React from 'react';
import { connect } from 'react-redux';
import LoadGif from '../../img/loading/126.svg';
import { setCurrentPageAC, setTotalUsersCountAC, setUsersAC, setValueIsFetchingAC, subscribeAC , setDisabledButtonFollowAC, unfollowThunkCreator, followThunkCreator, getUsersThunkCreator, setPageThunkCreator} from '../../redux/friendsReducer';
import Friends from './friends';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';
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

        for(let i = 1; i <= totalPages; i++) {
            arrPages.push(i);
        }
        return arrPages.map(el => <span onClick={() => {this.setPage(el)}} className={`pageNumber ${this.props.currentPage === el && 'selected'}`} >{el}</span>);
    }

    isFetching = () => {
        if (this.props.isFetching) {
            return <img className='loadGif' src={LoadGif} alt="load"/>
        } 
        return 
    }

    render() {
        return <Friends {...this.props} pages={this.pages()} isFetching={this.isFetching} />
    }
}



let mapStateToProps = (state) => {
    return {
        ...state.friendsReducer
    }
}

export default compose(
    connect(mapStateToProps, {
        subscribeAC,
        setUsersAC,
        setTotalUsersCountAC,
        setCurrentPageAC,
        setValueIsFetchingAC,
        setDisabledButtonFollowAC,
        unfollowThunkCreator,
        followThunkCreator,
        getUsersThunkCreator,
        setPageThunkCreator,
    
    }),
    withAuthRedirect
)(FriendsClassComponent)

 