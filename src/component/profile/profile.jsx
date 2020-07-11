import React from 'react';
import './profile.scss';


const profile = () => {
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

                </div>
            </div>
        </div>
    )
}

export default profile;