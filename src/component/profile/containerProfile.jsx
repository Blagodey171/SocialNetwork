import React from 'react';
import './profile.scss';
import Post from './post';
import Profile from './profile.jsx';
import { addPostAC, setProfileAC, setProfileThunkCreator, putProfileStatusThunkCreator} from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { getProfileStatusThunkCreator } from '../../redux/profileReducer';
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
        return this.props.posts.map(post => <Post author={post.author} text={post.text} likes={post.likesCount} />)
    }

    render() {
        return (
            <Profile {...this.props} posts={this.postsArray()} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.profileReducer
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