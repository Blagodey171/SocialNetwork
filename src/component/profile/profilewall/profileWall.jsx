import React from 'react';
import { useForm } from "react-hook-form";

const ProfileWall = React.memo((props) => {
    const { register, handleSubmit, errors } = useForm();
    
    let onSubmit = (value) => {props.addPostAC(value.postText)}
    let inputMaxLength = 5;
    return (
        <div className='profile-wall__posts' >
            <div className='profile-wall__create-post' >
                <form onSubmit={handleSubmit(onSubmit)} className='profile-wall__create-post-form' >
                    <input name={'postText'}  ref={register({required: true, maxLength: {value: inputMaxLength}})} className='new-post'></input>
                    {errors.postText?.type === 'required' && "Your input is required"}
                    {errors.postText?.type === 'maxLength' && `Your input max length is ${inputMaxLength}`}
                    <button type={'submit'} className='add-post' >add post</button>
                </form>
            </div>
            <div className='profile-wall__display-post' >
                {props.posts}
            </div>
        </div>
    )
})

export default ProfileWall;