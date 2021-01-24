import React, { useReducer, useContext } from 'react';

const RIGHT_SLIDE = 'RIGHT-SLIDE';
const LEFT_SLIDE = 'LEFT-SLIDE';
const CHANGE_AMOUNT_MOVE_ELEMENTS = 'CHANGE-AMOUNT-MOVE-ELEMENTS';
const CHANGE_POSITION_SLIDER = 'CHANGE-POSITION-SLIDER';
const CHANGE_CORUSEL_STEP = 'CHANGE-CORUSEL-STEP';

const contextCorusel = React.createContext();



const reducer = (state, action) => {
    switch (action.type) {
        case RIGHT_SLIDE: {
            debugger
            return {
                ...state,
                clickCount: --state.clickCount,
            }
        }
        case LEFT_SLIDE: {
            return {
                ...state,
                clickCount: ++state.clickCount,
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
export const useCorusel = () => {
    return useContext(contextCorusel);
}
export const CoruselReducerContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        clickCount: 0,
        positionSlider: 0,
        amountMoveElements: 10,
        sliderElementWidth: 37,
        coruselStep: 370,
    })

    const rightSlideAC = () => {
        dispatch({
            type: RIGHT_SLIDE,
        })
    }
    const leftSlideAC = () => {
        dispatch({
            type: LEFT_SLIDE,
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


    return (
        <contextCorusel.Provider value={{
            rightSlideAC,
            leftSlideAC,
            changePositionSliderAC,
            changeAmountMoveElementsAC,
            changeCoruselStepAC,
            clickCount: state.clickCount,
            positionSlider: state.positionSlider,
            amountMoveElements: state.amountMoveElements,
            sliderElementWidth: state.sliderElementWidth,
            coruselStep: state.coruselStep,
        }} >
            {children}
        </contextCorusel.Provider>
    )
}