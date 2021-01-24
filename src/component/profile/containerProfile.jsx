import React from 'react';
import './profile.scss';
import Post from './post';
import Profile from './profile.jsx';
import { addPostAC, setProfileAC, setProfileThunkCreator, putProfileStatusThunkCreator, getProfileStatusThunkCreator} from '../../redux/profileReducer';
import { getAuthId, getAuthStatus, getModefiedPostsArray } from '../../redux/selectors';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

class classComponentProfile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        this.props.setProfileThunkCreator(userId)
        this.props.getProfileStatusThunkCreator(userId)

    }
    
    

    postsArray = () => {
        return this.props.profilePosts.map(post => <Post author={post.author} text={post.text} likes={post.likesCount} />)
    }

    render() {
        return (
            <Profile {...this.props} posts={this.props.profilePosts} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profilePosts: getModefiedPostsArray(state),
        profile: state.profileReducer.profile,
        status: state.profileReducer.status,
        id: getAuthId(state),
        isAuth: getAuthStatus(state),
    }
}
export default compose(
    connect(mapStateToProps, {
        addPostAC,
        setProfileAC,
        setProfileThunkCreator,
        getProfileStatusThunkCreator,
        putProfileStatusThunkCreator,
    }),
    withRouter,
    withAuthRedirect
)(classComponentProfile);