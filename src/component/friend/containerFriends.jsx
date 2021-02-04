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

        return arrPages.map(el => <span  onClick={(e) => {this.setPage(el)}} className={`page-number-container ${this.props.currentPage === el && 'selected'}`} ><span id={el} className={`pageNumber `}>{el}</span></span>);
    }

    

    render() {
        return <Friends {...this.props} corusel={this.props.corusel} pages={this.pages()} isFetching={this.props.isFetching} />
    }
}



let mapStateToProps = (state) => {
    return {
        ...state.friendsReducer,
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

 