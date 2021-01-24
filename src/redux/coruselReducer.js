import {batch} from 'react-redux' 
const RIGHT_SLIDE = 'RIGHT-SLIDE';
const LEFT_SLIDE = 'LEFT-SLIDE';
const CHANGE_AMOUNT_MOVE_ELEMENTS = 'CHANGE-AMOUNT-MOVE-ELEMENTS';
const CHANGE_POSITION_SLIDER = 'CHANGE-POSITION-SLIDER';
const CHANGE_CORUSEL_STEP = 'CHANGE-CORUSEL-STEP';

let initialState = {
    clickCount: 0,
    positionSlider: 0,
    amountMoveElements: 10,
    sliderElementWidth: 37,
    coruselStep: 370,
}

let coruselReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

export const rightSlideAC = (clickCount) => {
    return {
        type: RIGHT_SLIDE,
        clickCount,
    }
}

export const leftSlideAC = (clickCount) => {
    return {
        type: LEFT_SLIDE,
        clickCount,
    }
}
export const changePositionSliderAC = (positionSlider) => {
    return {
        type: CHANGE_POSITION_SLIDER,
        positionSlider,
    }
}
export const changeAmountMoveElementsAC = (amountMoveElements) => {
    return {
        type: CHANGE_AMOUNT_MOVE_ELEMENTS,
        amountMoveElements,
    }
}
export const changeCoruselStepAC = (coruselStep) => {
    return {
        type: CHANGE_CORUSEL_STEP,
        coruselStep,
    }
}

export const change = (data) => {
    return (dispatch, getState) => {
        batch(() => {
            dispatch(changeAmountMoveElementsAC(data))
            dispatch(changeCoruselStepAC(getState().coruselReducer.amountMoveElements * getState().coruselReducer.sliderElementWidth))
            dispatch(changePositionSliderAC(getState().coruselReducer.positionSlider - getState().coruselReducer.coruselStep))
        })
    }
}

export default coruselReducer;