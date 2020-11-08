import React from 'react';
import './profile.scss';
import Post from './post';
import Profile from './profile.jsx';
import {setProfile} from '../../DAL/profileAPI';


class classComponentProfile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        setProfile(userId).then(data => {
            console.log(data)
            this.props.setProfileAC(data);
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