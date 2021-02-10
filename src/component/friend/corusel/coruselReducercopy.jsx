/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useRef, useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import arrow from '../../../img/corusel/arrow.svg';
import './corusel.scss';

const CoruselReducer = (props) => {
    console.log(props)
    const leftArrow = document.querySelector('.corusel_leftArrow');
    const rightArrow = document.querySelector('.corusel_rightArrow');

    const [currentPortion, setCurrentPortion] = useState(1);
    const portionsCount = props.pages / props.portionsSize;
    const leftPortionPageNumber = (currentPortion - 1) * props.portionsSize;
    const rightPortionPageNumber = (currentPortion * props.portionsSize) - 1;
    const maxWidthWindow = useMediaQuery({ query: '(max-width:700px)' });

    const showArr = () => {
        return props.pages.filter( (span, index) => index >= leftPortionPageNumber && index <= rightPortionPageNumber )
    }
    const moveSliderLeft = () => {
        setCurrentPortion(currentPortion - 1)
    }
    const moveSliderRight = () => {
        setCurrentPortion(currentPortion + 1)
    }
    useEffect(() => { 
        maxWidthWindow ? props.setPortionSize(5) : props.setPortionSize(10)
    })
    
    return (
        <div className='corusel'>
            <div className="corusel_arrow" >
                <img className='corusel_leftArrow arrow' onClick={moveSliderLeft} src={arrow} alt="left" />
            </div>
            <div className="corusel_content">
                <div className='corusel_pages-link'>
                    {
                        showArr()
                    }
                </div>
            </div>
            <div className="corusel_arrow" >
                <img className='corusel_rightArrow arrow' onClick={moveSliderRight} src={arrow} alt="right" />
            </div>
        </div>
    )
}

export default CoruselReducer;

// function sliderMoveOption() {
    //     const lastClick = Math.floor(splittingPages().common);
    //     const lastElements = splittingPages().remainder / 2;
    //     // вторая проверка выясняет : сделал ли я последний клик
    //     if (splittingPages().remainder !== 0 && lastClick + state.clickCount === 0) {
    //         if (amountMoveElements.current === 5) {
    //             changePositionSliderAC(state.positionSlider - (lastElements * state.sliderElementWidth))
    //         }
    //         changePositionSliderAC(state.positionSlider - (splittingPages().remainder * state.sliderElementWidth))
    //     } else {
    //         changePositionSliderAC(state.clickCount * state.coruselStep);
    //     }
    // }

    // function clickHandler(e) {
    //     e.preventDefault();
    //     if (e.target === leftArrow) {
    //         if (state.positionSlider === 0) return;
    //         leftSlideAC(++state.clickCount);
    //         sliderMoveOption();
    //     } else if (e.target === rightArrow) {
    //         // проверка - достигли ли мы максимального количества кликов вправо
    //         if (Math.ceil(splittingPages().common * -1) === state.clickCount) {
    //             return;
    //         }
    //         rightSlideAC(--state.clickCount);
    //         sliderMoveOption();
    //     }
    // }