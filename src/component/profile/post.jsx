import React from 'react';

const post = (props) => {
    return (
        <div className='post' >
            <h2>{props.author}</h2>
            <span>{props.text}</span>
            <span>{props.likes} </span>
        </div>
    )
}

export default post;