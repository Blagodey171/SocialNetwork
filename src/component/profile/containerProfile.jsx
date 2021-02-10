import React from 'react';
import './profile.scss';
import Post from './post';
import Profile from './profile.jsx';
import { addPostAC, setProfileAC, setProfileThunkCreator, putProfileStatusThunkCreator, getProfileStatusThunkCreator} from '../../redux/profileReducer';
import { getAuthId, getAuthStatus, getModefiedPostsArray, getProfileStatus } from '../../redux/selectors/selectorsProfile';
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
        console.log(this.props.match)
        this.props.setProfileThunkCreator(userId)
        this.props.getProfileStatusThunkCreator(userId)

    }
    
    render() {
        return (
            <Profile {...this.props} posts={this.props.profilePosts} />
        )
    }
}

const mapStateToProps = (state) => {
    console.log('mapstate')
    return {
        profilePosts: getModefiedPostsArray(state),
        profile: state.profileReducer.profile,
        status: getProfileStatus(state),
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