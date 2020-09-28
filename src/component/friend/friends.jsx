import React from 'react';
import './friends.scss'

let friend = (props) => {
    return (
        <div className='container'>
            {
                props.users.map(user => 
                    <div className='user-card' >
                        <div className='user-card__avatar'>
                            <img src={user.avatar} alt=""/>
                            {
                                user.follow ? <button onClick={() => {props.subscribe(user.id)}} className='user-card__follow'>UNFOLLOW</button> : 
                                <button onClick={() => {props.subscribe(user.id)}} className='user-card__follow'>FOLLOW</button>
                            }
                        </div>
                        <div className='user-card__info' >
                            <div className='user-card__name'>
                                {user.name}
                            </div>
                            <div className='user-card__navigation'>
                                {user.navigation.country}
                                {user.navigation.city}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default friend;