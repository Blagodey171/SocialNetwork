import React from 'react';
import './profile.scss';
import Post from './post';

import {addPostAction} from '../../redux/profileReducer';
import {changeTextareaValueAction} from '../../redux/profileReducer';
import Profile from './profile';



let containerProfile = (props) => {
    let postsArray = props.posts.map(post => <Post author={post.author} text={post.text} likes={post.likesCount} />)
    
    function addPost () {
        props.dispatch(addPostAction())
    }

    function changeTextarea (text) {
        props.dispatch(changeTextareaValueAction(text))
    }

    return <Profile postsArray={postsArray} changeTextareaValueAction={changeTextarea} addPostAction={addPost} />
    
}

export default containerProfile;