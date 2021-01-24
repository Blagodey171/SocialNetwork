import React, { useState, useEffect, useCallback } from 'react';
import { rightSlideAC, leftSlideAC } from '../../../redux/coruselReducer';
import arrow from '../../../img/corusel/arrow.svg';
import './corusel.scss'

const CoruselDefault = (props) => {

    console.log(props)
    // количество видимых элементов в слайдере единовременно
    const sliderVisibleElements = 10;
    // ширина одного элемента слайдера(25 width,1+1 border,5+5 margin)
    const sliderElementWidth = 37;
    // количество нажатий на стрелки перемещения
    const [clickCount, setClickCount] = useState(0);
    // позиция слайдера
    const [positionSlider, setPositionSlider] = useState(0);
    // количество элементов на которое перемещается слайдер
    const [amountMoveElements, setAmountMoveElements] = useState(10);
    // сдвиг в пикселях
    const [coruselStep, setCoruselStep] = useState(amountMoveElements * sliderElementWidth)
    // максимальное кол-во кликов
    const maxClickCount = props.pages.length / amountMoveElements;

    const callback = useCallback(function splittingPages () {
        return {
            common: props.pages.length / amountMoveElements,
            remainder: props.pages.length % amountMoveElements,
        }
    },[props.pages.length, amountMoveElements] )

    useEffect(() => {
        console.log('render')
        debugger
        if (callback().remainder !== 0 && Math.ceil(props.pages.length / (amountMoveElements * -1)) - clickCount === 0) {
            setAmountMoveElements(props.pages.length % amountMoveElements);
            setCoruselStep(amountMoveElements * sliderElementWidth);
            setPositionSlider(positionSlider - coruselStep);
        } else setPositionSlider(clickCount * coruselStep);
        
    }, [coruselStep, clickCount, props.pages.length, amountMoveElements, sliderElementWidth, positionSlider, callback])
    
    function sliderMoveOption (coruselDOM) {
        debugger
        if (callback().remainder === 0 && callback().common > clickCount ) {
            setPositionSlider(clickCount * coruselStep);
            // вторая проверка выясняет : получаю максимальное количество кликов для скролла вправо,при условии что двигается по 10 элементов 
            // если от максимально возможных кликов вправо отнять текущие то,  мы получим - сделали ли мы предпоследний клик(то есть разница в возможных кликах с текущими должна быть -1(1 клик в запасе))
        } else if (callback().remainder !== 0 && Math.ceil(props.pages.length / (amountMoveElements * -1)) - clickCount === -1) {
            setAmountMoveElements(props.pages.length % amountMoveElements);
            setCoruselStep(amountMoveElements * sliderElementWidth);
            setPositionSlider(positionSlider - coruselStep);
            // setAmountMoveElements(10);
            // setCoruselStep(amountMoveElements * sliderElementWidth);
        } else {
            setPositionSlider(clickCount * coruselStep);
            
        }
        // coruselDOM.style.transition = `transform .5s`;
        // coruselDOM.style.transform = `translateX(${positionSlider}px)`;
    }

    function clickHandler(e) {
        debugger

        e.preventDefault();
        const leftArrow = document.querySelector('.corusel_leftArrow');
        const rightArrow = document.querySelector('.corusel_rightArrow');
        const coruselPagesLink = document.querySelector('.corusel_pages-link');
        const selectedLink = document.querySelector('.selected');

        if (e.target === leftArrow) {
            if ( positionSlider === 0 ) return;
            setClickCount(prev => prev + 1);
            sliderMoveOption(coruselPagesLink);
        } else if (e.target === rightArrow) {
            // проверка - достигли ли мы максимального количества кликов вправо
            if (Math.floor(callback().common) * -1 === clickCount) {
                return;
            }
            setClickCount(prev => prev - 1);
            // sliderMoveOption(coruselPagesLink);
        }
    }
    return (
        <div className='corusel'>
            <div className="corusel_arrow" >
                <img className='corusel_leftArrow' onClick={clickHandler} src={arrow} alt="left" />
            </div>
            <div className="corusel_content">
                <div className='corusel_pages-link' style={{transition: `transform .5s`, transform: `translateX(${positionSlider}px)`}}>
                    {props.pages}
                </div>
            </div>
            <div className="corusel_arrow" >
                <img className='corusel_rightArrow' onClick={clickHandler} src={arrow} alt="right" />
            </div>
        </div>
    )
}

export default CoruselDefault;