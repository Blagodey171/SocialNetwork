import React from 'react';
import './profile.scss';

let profile = (props) => {

    let ref = React.createRef();

    let changeTextareaProfile = () => {
        let text = ref.current.value;
        props.changeTextareaValueAC(text)
    }

    let addPost = () => {
        props.addPostAC()
    }

    return (
        <div className='profile'>
                <div className='profile-info' >
                    <div className='profile-info__avatar' >
                        { props.profile ? <img className='profile-info__img' src={props.profile.photos.large} alt="" /> : <img className='profile-info__img' src='' alt="img" />}
                        <div className='profile-info__fullname'>
                            {
                                props.profile ? <h3> {props.profile.fullName} </h3> : null
                            }
                        </div>
                        <div className='profile-info__settings-img' ></div>
                    </div>
                    <div className='profile-info__person-data' >
                        <div className='profile-info__about-me'>
                            {
                                props.profile ? <h3>{`About me : ${props.profile.aboutMe}` }</h3> : <h3>{`нет информации`}</h3>
                            }
                        </div>
                    </div>
                </div>
                <div className='profile-wall' >
                    <div className='profile-wall__profile-content' >

                    </div>
                    <div className='profile-wall__posts' >
                        <div className='profile-wall__create-post' >
                            <textarea onChange={changeTextareaProfile} ref={ref} name="new-post" className='new-post' value={props.valueTextarea} ></textarea>
                            <button onClick={addPost} className='add-post' >add post</button>
                        </div>
                        <div className='profile-wall__display-post' >
                            {props.posts}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default profile;