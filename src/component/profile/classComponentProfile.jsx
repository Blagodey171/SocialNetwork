import React from 'react';
import './profile.scss';
import Post from './post';
import Profile from './profile.jsx';
import * as axios from 'axios';

class classComponentProfile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        console.log(userId)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : '12389'}`).then(res => {
            this.props.setProfileAC(res.data);
        })
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



export default classComponentProfile;