import React from 'react';
import './profile.scss';
import Post from './post';

let profile = (props) => {
    let postsArray = props.posts.map(post => <Post author={post.author} text={post.text} likes={post.likesCount} />)

    let textareaValue = React.createRef();

    function addPostAction () {
        props.addPostAC()
    };

    function changeTextarea () {
        let text = textareaValue.current.value;
        props.changeTextareaValueAC(text)
    };

    

    return (
        <div className='profile'>
            <div className='profile-info' >
                <div className='profile-info__avatar' >
                    <img className='profile-info__img' src="https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg" key='https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg' alt=""/>
                    <div className='profile-info__settings-img' ></div>
                </div>
                <div className='profile-info__person-data' ></div>
            </div>
            <div className='profile-wall' >
                <div className='profile-wall__profile-content' >

                </div>
                <div className='profile-wall__posts' >
                    <div className='profile-wall__create-post' >
                        <textarea onChange={changeTextarea} ref={textareaValue} name="new-post" className='new-post' value={props.valueTextarea} ></textarea>
                        <button onClick={addPostAction} className='add-post' >add post</button>
                    </div>
                    <div className='profile-wall__display-post' >
                        {postsArray}
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default profile;