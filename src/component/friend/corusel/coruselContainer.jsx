import React from 'react';
import Corusel from './corusel.jsx';
import { connect } from 'react-redux';
import { rightSlideAC, leftSlideAC, changePositionSliderAC, changeAmountMoveElementsAC, changeCoruselStepAC, change } from '../../../redux/coruselReducer';


const coruselContainer = (props) => {
    return (
        <Corusel {...props} />
    )
}


let mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {
    rightSlideAC, 
    leftSlideAC, 
    changePositionSliderAC, 
    changeAmountMoveElementsAC, 
    changeCoruselStepAC,
    change,
})(coruselContainer);