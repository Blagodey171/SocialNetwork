import React, { useReducer, useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import arrow from '../../../img/corusel/arrow.svg';
import './corusel.scss';

const RIGHT_SLIDE = 'RIGHT-SLIDE';
const LEFT_SLIDE = 'LEFT-SLIDE';
const CHANGE_AMOUNT_MOVE_ELEMENTS = 'CHANGE-AMOUNT-MOVE-ELEMENTS';
const CHANGE_POSITION_SLIDER = 'CHANGE-POSITION-SLIDER';
const CHANGE_CORUSEL_STEP = 'CHANGE-CORUSEL-STEP';
const CHANGE_CLICK_COUNT_AT_RESIZING = 'CHANGE-CLICK-COUNT-AT-RESIZING';

function reducer(state, action) {
    switch (action.type) {
        case RIGHT_SLIDE: {
            return {
                ...state,
                clickCount: action.clickCount,
            }
        }
        case LEFT_SLIDE: {
            return {
                ...state,
                clickCount: action.clickCount,
            }
        }
        case CHANGE_POSITION_SLIDER: {
            return {
                ...state,
                positionSlider: action.positionSlider,
            }
        }
        case CHANGE_CORUSEL_STEP: {
            return {
                ...state,
                coruselStep: action.coruselStep,
            }
        }
        case CHANGE_CLICK_COUNT_AT_RESIZING: {
            return {
                ...state,
                clickCount: action.clickCount,
            }
        }
        default: return state;
    }
}

const CoruselReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        clickCount: 0,
        positionSlider: 0,
        sliderElementWidth: 37,
        coruselStep: 370,
        transform: `transform .5s`,
    })
    const rightSlideAC = (clickCount) => {
        dispatch({
            type: RIGHT_SLIDE,
            clickCount
        })
    }
    const leftSlideAC = (clickCount) => {
        dispatch({
            type: LEFT_SLIDE,
            clickCount
        })
    }
    const changePositionSliderAC = (positionSlider) => {
        dispatch({
            type: CHANGE_POSITION_SLIDER,
            positionSlider
        })
    }
    const changeCoruselStepAC = (coruselStep) => {
        dispatch({
            type: CHANGE_CORUSEL_STEP,
            coruselStep,
        })
    }
    const changeClickCountAtResizing = (clickCount) => {
        dispatch({
            type: CHANGE_CLICK_COUNT_AT_RESIZING,
            clickCount
        })
    }

    const amountMoveElements = useRef(10);
    const maxWidthWindow = useMediaQuery({query: '(max-width:800px)'});
    
    useEffect(() => {
        if (maxWidthWindow) {
            console.log('resize--')
            amountMoveElements.current = 5;
            let corusel = document.querySelector('.corusel_content');
            changeClickCountAtResizing(state.clickCount * 2)
            corusel.style.width = `${amountMoveElements.current * state.sliderElementWidth}px`;
            changeCoruselStepAC(amountMoveElements.current * state.sliderElementWidth);
// если слайдер ресайзить с небольшого,со страницы заканчивающейся на 10,20,30 и тд. то крупный размер слайдера будет заканчиваться на 15,25,35 - этого не нужно
        } else {
            console.log('resize++')
            amountMoveElements.current = 10;
            let corusel = document.querySelector('.corusel_content');
            // исправлять тут,так как если сделано было 3 клика,то 3 делим на 2 и получаем не целое
            changeClickCountAtResizing(state.clickCount / 2)
            corusel.style.width = `${amountMoveElements.current * state.sliderElementWidth}px`;
            changeCoruselStepAC(amountMoveElements.current * state.sliderElementWidth);
        }
        
    }, [maxWidthWindow, state.sliderElementWidth])

    function splittingPages() {
        return {
            common: props.pages.length / amountMoveElements.current,
            remainder: props.pages.length % amountMoveElements.current,
        }
    }

    function sliderMoveOption() {
        const lastClick = Math.floor(splittingPages().common);
        const lastElements = splittingPages().remainder / 2;
        // вторая проверка выясняет : сделал ли я последний клик
        if (splittingPages().remainder !== 0 && lastClick + state.clickCount === 0) {
            if (amountMoveElements.current === 5) {
                changePositionSliderAC(state.positionSlider - (lastElements * state.sliderElementWidth))
            }
            changePositionSliderAC(state.positionSlider - (splittingPages().remainder * state.sliderElementWidth))
        } else {
            changePositionSliderAC(state.clickCount * state.coruselStep);
        }
    }

    function clickHandler(e) {
        e.preventDefault();
        const leftArrow = document.querySelector('.corusel_leftArrow');
        const rightArrow = document.querySelector('.corusel_rightArrow');
        if (e.target === leftArrow) {
            if (state.positionSlider === 0) return;
            leftSlideAC(++state.clickCount);
            sliderMoveOption();
        } else if (e.target === rightArrow) {
            // проверка - достигли ли мы максимального количества кликов вправо
            if (Math.ceil(splittingPages().common * -1) === state.clickCount) {
                return;
            }
            rightSlideAC(--state.clickCount);
            sliderMoveOption();
        }
    }

    return (
        <div className='corusel'>
            <div className="corusel_arrow" >
                <img className='corusel_leftArrow' onClick={clickHandler} src={arrow} alt="left" />
            </div>
            <div className="corusel_content">
                <div className='corusel_pages-link' style={{ transition: state.transform, transform: `translateX(${state.positionSlider}px)` }}>
                    {props.pages}
                </div>
            </div>
            <div className="corusel_arrow" >
                <img className='corusel_rightArrow' onClick={clickHandler} src={arrow} alt="right" />
            </div>
        </div>
    )
}

export default CoruselReducer;