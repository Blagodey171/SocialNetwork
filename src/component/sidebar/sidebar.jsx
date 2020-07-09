import React from 'react';
import './sidebar.scss';
import {NavLink} from 'react-router-dom';

import ContainerLink from './containerLink/containerLink';



const sidebar = (props) => {
    const fullLink = props.link.map(link => <ContainerLink to={link.path} activeClassName='click' text={link.name} />);

    return (
        <div className='containerSidebar'>
            {fullLink}
        </div>
    )
}

export default sidebar;