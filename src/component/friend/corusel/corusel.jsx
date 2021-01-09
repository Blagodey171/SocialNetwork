import React, { useState, useEffect } from 'react';
import arrow from '../../../img/corusel/arrow.svg';
import './corusel.scss'

const Corusel = (props) => {
    const coruselStep = 20;
    let clickCount = 0;
    let positionSlider = 0;

    function sliderMoveOption (coruselDOM) {
        positionSlider = clickCount * coruselStep;
        coruselDOM.style.transform = `translateX(${positionSlider}px)`;
    }

    function clickHandler(e) {
        e.preventDefault();
        const leftArrow = document.querySelector('.corusel_leftArrow');
        const rightArrow = document.querySelector('.corusel_rightArrow');
        const coruselPagesLink = document.querySelector('.corusel_pages-link');

        if (e.target === leftArrow) {
            clickCount += 1;
            sliderMoveOption(coruselPagesLink)
        } else if (e.target === rightArrow) {
            clickCount -= 1;
            sliderMoveOption(coruselPagesLink)
        }
    }
    return (
        <div className='corusel'>
            <div className="corusel_arrow" >
                <img className='corusel_leftArrow' onClick={clickHandler} src={arrow} alt="left" />
            </div>
            <div className="corusel_content">
                <div className='corusel_pages-link'>
                    {props.pages}
                </div>
            </div>
            <div className="corusel_arrow" >
                <img className='corusel_rightArrow' onClick={clickHandler} src={arrow} alt="right" />
            </div>
        </div>
    )
}

export default Corusel;