import React from 'react';
import { connect } from 'react-redux';
import { unfollowThunkCreator, followThunkCreator, getUsersThunkCreator, setPageThunkCreator} from '../../redux/friendsReducer';
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

        return arrPages.map(el => <span onClick={() => {this.setPage(el)}}   className={`page-number-container`} ><span id={el} className={`pageNumber ${this.props.currentPage === el && 'selected'}`}>{el}</span></span>);
    }

    render() {
        return <Friends {...this.props} pages={this.pages()} isFetching={this.props.isFetching} />
    }
}



let mapStateToProps = (state) => {
    return {
        ...state.friendsReducer
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

 