import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Friends from './friends';
import LoadGif from '../../img/loading/126.svg';
import {subscribeAC, setUsersAC, setTotalUsersCountAC, setCurrentPageAC, setValueIsFetchingAC} from '../../redux/friendsReducer';

class FriendsClassComponent extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0)
            this.props.setValueIsFetchingAC()
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.sizePage}`).then(res => {
            this.props.setValueIsFetchingAC()    
            this.props.setUsersAC(res.data.items);
            this.props.setTotalUsersCountAC(res.data.totalCount);
        })
        
    }

    setPage = (page) => {
        this.props.setCurrentPageAC(page)
        this.props.setValueIsFetchingAC()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.sizePage}`).then(res => {
            this.props.setValueIsFetchingAC()
            this.props.setUsersAC(res.data.items)
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
        } return 
    }

    render() {
        return <Friends pages={this.pages()} setPage={this.setPage} currentPage={this.props.currentPage} subscribe={this.props.subscribeAC} setUsers={this.props.setUsersAC} users={this.props.users} isFetching={this.isFetching} />
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.friendsReducer.users,
        totalUsersCount: state.friendsReducer.totalUsersCount,
        sizePage: state.friendsReducer.sizePage,
        currentPage: state.friendsReducer.currentPage,
        isFetching: state.friendsReducer.isFetching,
    }
}


export default connect(mapStateToProps, {
    subscribeAC,
    setUsersAC,
    setTotalUsersCountAC,
    setCurrentPageAC,
    setValueIsFetchingAC,

})(FriendsClassComponent)