import React from 'react';
import './profile.scss';
import Post from './post'


const profile = (props) => {
    let postsArray = props.posts.map(post => <Post author={post.author} text={post.text} likes={post.likesCount} />)
    

    let ref = React.createRef();

    function post () {
        
        let value = ref.current.value;
        props.addPost(value)
    }

    

    return (
        <div className='profile'>
            <div className='profile__info' >
                <div className='profile__info__avatar' >
                    <img className='profile__info__avatar__img' src="https://sun9-61.userapi.com/c837722/u398342099/video/y_1a57f360.jpg" alt=""/>
                    <div className='profile__info__avatar__settings-img' >

                    </div>
                </div>
                <div className='profile__info__person-data' >

                </div>
            </div>
            <div className='profile__wall' >
                <div className='profile__wall__profile-content' >

                </div>
                <div className='profile__wall__posts' >
                    <div className='profile__wall__posts__create' >
                        <textarea ref={ref} name="new_post" className='new_post' ></textarea>
                        <button onClick={post} className='add_post' >add post</button>
                    </div>
                    <div className='profile__wall__posts__display' >
                        {postsArray}
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default profile;