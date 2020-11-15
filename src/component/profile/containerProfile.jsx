import React from 'react';
import './profile.scss';
import Post from './post';
import Profile from './profile.jsx';
import { addPostAC, changeTextareaValueAC, setProfileAC, setProfileThunkCreator} from '../../redux/profileReducer';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

class classComponentProfile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        this.props.setProfileThunkCreator(userId)
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

let withRouterClassComponentProfile = withRouter(classComponentProfile)

export default connect(mapStateToProps, {
    addPostAC,
    changeTextareaValueAC,
    setProfileAC,
    setProfileThunkCreator,
})(withRouterClassComponentProfile);