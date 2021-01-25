import React, { useReducer, useRef, useEffect } from 'react';
import arrow from '../../../img/corusel/arrow.svg';
import './corusel.scss';

const RIGHT_SLIDE = 'RIGHT-SLIDE';
const LEFT_SLIDE = 'LEFT-SLIDE';
const CHANGE_AMOUNT_MOVE_ELEMENTS = 'CHANGE-AMOUNT-MOVE-ELEMENTS';
const CHANGE_POSITION_SLIDER = 'CHANGE-POSITION-SLIDER';
const CHANGE_CORUSEL_STEP = 'CHANGE-CORUSEL-STEP';


function reducer(state, action) {
    switch (action.type) {
        case RIGHT_SLIDE: {
            debugger
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
        case CHANGE_AMOUNT_MOVE_ELEMENTS: {
            return {
                ...state,
                amountMoveElements: action.amountMoveElements,
            }
        }
        case CHANGE_CORUSEL_STEP: {
            return {
                ...state,
                coruselStep: action.coruselStep,
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
        windowWidth: null,
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
    const changeAmountMoveElementsAC = (amountMoveElements) => {
        dispatch({
            type: CHANGE_AMOUNT_MOVE_ELEMENTS,
            amountMoveElements,
        })
    }
    const changeCoruselStepAC = (coruselStep) => {
        dispatch({
            type: CHANGE_CORUSEL_STEP,
            coruselStep,
        })
    }

    const amountMoveElements = useRef(10);

    let windowWidth = window.innerWidth;
    useEffect(() => {
        debugger
        if (windowWidth < 1000) {
            amountMoveElements.current = 5;
            let corusel = document.querySelector('.corusel_content');
            corusel.style.width = `${amountMoveElements.current * state.sliderElementWidth}px`;
            changeCoruselStepAC(amountMoveElements.current * state.sliderElementWidth);
        }
    }, [state.sliderElementWidth, windowWidth])
    // длительность слайда в секундах,можно вынести в редюсер или еще куда(пока тут)
    function splittingPages() {
        return {
            common: props.pages.length / amountMoveElements.current,
            remainder: props.pages.length % amountMoveElements.current,
        }
    }
    function sliderMoveOption() {
        debugger
        // вторая проверка выясняет : сделал ли я последний клик
        if (splittingPages().remainder !== 0 && Math.floor(splittingPages().common) + state.clickCount === 0) {
            changePositionSliderAC(state.positionSlider - (splittingPages().remainder * state.sliderElementWidth))
        } else {
            changePositionSliderAC(state.clickCount * state.coruselStep);
        }
    }

    function clickHandler(e) {
        e.preventDefault();
        const leftArrow = document.querySelector('.corusel_leftArrow');
        const rightArrow = document.querySelector('.corusel_rightArrow');
        debugger
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