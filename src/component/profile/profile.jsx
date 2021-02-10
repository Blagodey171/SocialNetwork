import React from 'react';
import './profile.scss';
import ContainerProfilePersonData from './profilepersondata/containerProfilePersonData';
import ProfileContent from './profilecontent/profileContent';
import ProfileWall from './profilewall/profileWall';

let profile = (props) => {
    return (
        <div className='profile'>
            <ContainerProfilePersonData putProfileStatusThunkCreator={props.putProfileStatusThunkCreator} profile={props.profile} status={props.status} />
            
            <div className='profile-wall' >
                <ProfileContent  />
                <ProfileWall addPostAC={props.addPostAC} posts={props.posts}/>
            </div>
        </div>
    )
}

export default profile;