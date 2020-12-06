import React from 'react';
import './profile.scss';
import ContainerProfilePersonData from './profilepersondata/containerProfilePersonData';
import ProfileContent from './profilecontent/profileContent';
import ProfileWall from './profilewall/profileWall';

let profile = (props) => {

    

    return (
        <div className='profile'>
            <ContainerProfilePersonData {...props} />
            
            <div className='profile-wall' >
                <ProfileContent {...props} />
                <ProfileWall {...props} />
            </div>
        </div>
    )
}

export default profile;