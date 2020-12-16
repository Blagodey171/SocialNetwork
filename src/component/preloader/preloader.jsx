import React from 'react';
import LoadGif from '../../img/loading/126.svg';

let preloader = (props) => {
    return (
      <div><img className='loadGif' src={LoadGif} alt="load"/></div>
    )
}

export default preloader;