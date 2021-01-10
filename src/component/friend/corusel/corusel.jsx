import React, { useState, useEffect } from 'react';
import arrow from '../../../img/corusel/arrow.svg';
import './corusel.scss'

const Corusel = (props) => {
    // количество видимых элементов в слайдере единовременно
    const sliderVisibleElements = 10;
    // ширина одного элемента слайдера(25 width,1+1 border,5+5 margin)
    const sliderElementWidth = 37;
    // количество нажатий на стрелки перемещения
    let [clickCount, setClickCount] = useState(0);
    // позиция слайдера
    let [positionSlider, setPositionSlider] = useState(0);
    // количество элементов на которое перемещается слайдер
    let [amountMoveElements, setAmountMoveElements] = useState(10);
    // сдвиг в пикселях
    let [coruselStep, setCoruselStep] = useState(amountMoveElements * sliderElementWidth)
  
    function sliderMoveOption (coruselDOM) {
        setAmountMoveElements(amountMoveElements = 10);
        setCoruselStep(coruselStep = amountMoveElements * sliderElementWidth)
        
        if (props.pages.length % amountMoveElements === 0 && props.pages.length / amountMoveElements > clickCount ) {
            setPositionSlider(positionSlider = clickCount * coruselStep)
        } else if ((props.pages.length % amountMoveElements !== 0) && Math.floor(props.pages.length / (amountMoveElements * -1)) - clickCount === -1) {
            setAmountMoveElements(amountMoveElements = props.pages.length % amountMoveElements)
            setCoruselStep(coruselStep = amountMoveElements * sliderElementWidth)
            setPositionSlider(positionSlider -= coruselStep)
        } else {
            setPositionSlider(positionSlider = clickCount * coruselStep)
        }
        coruselDOM.style.transition = `transform .5s`;
        coruselDOM.style.transform = `translateX(${positionSlider}px)`;
    }

    function clickHandler(e) {
        e.preventDefault();
        const leftArrow = document.querySelector('.corusel_leftArrow');
        const rightArrow = document.querySelector('.corusel_rightArrow');
        const coruselPagesLink = document.querySelector('.corusel_pages-link');
        const selectedLink = document.querySelector('.selected');

        if (e.target === leftArrow) {
            if ( positionSlider === 0 ) return;
            setClickCount(clickCount += 1);
            sliderMoveOption(coruselPagesLink);
        } else if (e.target === rightArrow) {
            setClickCount(clickCount -= 1);
            sliderMoveOption(coruselPagesLink);
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