import React from 'react';

const profileWall = (props) => {

    let ref = React.createRef();

    let changeTextareaProfile = () => {
        let text = ref.current.value;
        props.changeTextareaValueAC(text)
    }

    let addPost = () => {
        props.addPostAC()
    }

    return (
        <div className='profile-wall__posts' >
                    <div className='profile-wall__create-post' >
                        <textarea onChange={changeTextareaProfile} ref={ref} name="new-post" className='new-post' value={props.valueTextarea} ></textarea>
                        <button onClick={addPost} className='add-post' >add post</button>
                    </div>
                    <div className='profile-wall__display-post' >
                        {props.posts}
                    </div>
                </div>
    )
}

export default profileWall;