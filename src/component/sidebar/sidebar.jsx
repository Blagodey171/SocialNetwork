import React from 'react';
import './sidebar.scss';


import ContainerLink from './containerLink/containerLink';



const sidebar = (props) => {
    const allLink = props.link.map(link => <ContainerLink to={link.path} activeClassName='click' text={link.name} />);

    return (
        <div className='container-sidebar'>
            {allLink}
        </div>
    )
}

export default sidebar;