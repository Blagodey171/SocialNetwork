import React from 'react';
import { connect } from 'react-redux';
import LoadGif from '../../img/loading/126.svg';
import { setCurrentPageAC, setTotalUsersCountAC, setUsersAC, setValueIsFetchingAC, subscribeAC , setDisabledButtonFollowAC} from '../../redux/friendsReducer';
import Friends from './friends';
import {getUsers} from '../../DAL/userAPI';
class FriendsClassComponent extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0){
            this.props.setValueIsFetchingAC()

            getUsers(this.props.currentPage, this.props.sizePage).then(data => {
                this.props.setValueIsFetchingAC()
                this.props.setUsersAC(data.items);
                this.props.setTotalUsersCountAC(data.totalCount);
            })} 
    }

    setPage = (page) => {
        this.props.setCurrentPageAC(page)
        this.props.setValueIsFetchingAC()
        getUsers(page, this.props.sizePage).then(data => {
            this.props.setValueIsFetchingAC()
            this.props.setUsersAC(data.items)
        })
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
        if (!this.props.isFetching) {
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
        users: state.friendsReducer.users,
        totalUsersCount: state.friendsReducer.totalUsersCount,
        sizePage: state.friendsReducer.sizePage,
        currentPage: state.friendsReducer.currentPage,
        isFetching: state.friendsReducer.isFetching,
        disabledButtonFollow: state.friendsReducer.disabledButtonFollow,
    }
}


export default connect(mapStateToProps, {
    subscribeAC,
    setUsersAC,
    setTotalUsersCountAC,
    setCurrentPageAC,
    setValueIsFetchingAC,
    setDisabledButtonFollowAC,

})(FriendsClassComponent)