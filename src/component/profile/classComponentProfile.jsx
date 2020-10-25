import React from 'react';
import './profile.scss';
import Post from './post';
import * as axios from 'axios';

class classComponentProfile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.ref = React.createRef();
    }

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/15`).then(res => {
            console.log(res.data)
            this.props.setProfileAC(res.data);
        })
    }

    postsArray = () => {
        return this.props.posts.map(post => <Post author={post.author} text={post.text} likes={post.likesCount} />)
    }


    changeTextareaProfile = () => {
        let text = this.ref.current.value;
        this.props.changeTextareaValueAC(text)
    }

    addPost = () => {
        this.props.addPostAC()
    }

    render() {

        return (
            <div className='profile'>
                <div className='profile-info' >
                    <div className='profile-info__avatar' >
                        {
                            !this.props.profile ? <img className='profile-info__img' src='../../img/avatar/w.jpg' alt="" /> : <img className='profile-info__img' src={this.props.profile.photos.small} alt="" />
                        
                        }
                        <div className='profile-info__settings-img' ></div>
                    </div>
                    <div className='profile-info__person-data' ></div>
                </div>
                <div className='profile-wall' >
                    <div className='profile-wall__profile-content' >

                    </div>
                    <div className='profile-wall__posts' >
                        <div className='profile-wall__create-post' >
                            <textarea onChange={this.changeTextareaProfile} ref={this.ref} name="new-post" className='new-post' value={this.props.valueTextarea} ></textarea>
                            <button onClick={this.addPost} className='add-post' >add post</button>
                        </div>
                        <div className='profile-wall__display-post' >
                            {this.postsArray()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}



export default classComponentProfile;