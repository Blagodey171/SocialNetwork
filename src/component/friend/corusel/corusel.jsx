import React from 'react';
import arrow from '../../../img/corusel/arrow.svg';
import './corusel.scss'

let Corusel = (props) => {
    // длительность слайда в секундах,можно вынести в редюсер или еще куда(пока тут)
    
    const transform = `transform .5s`;
    function splittingPages () {
        return {
            common: props.pages.length / props.corusel.amountMoveElements,
            remainder: props.pages.length % props.corusel.amountMoveElements,
        }
    }
    function sliderMoveOption () {
        debugger
            // вторая проверка выясняет : сделал ли я последний клик
        if (splittingPages().remainder !== 0 && Math.floor(props.pages.length / props.corusel.amountMoveElements) + props.corusel.clickCount === 0) {
            // props.change(splittingPages().remainder);
            props.changePositionSliderAC(props.corusel.positionSlider - (splittingPages().remainder * props.corusel.sliderElementWidth))
            // props.changeAmountMoveElementsAC(10);
            // props.changeCoruselStepAC(props.corusel.amountMoveElements * props.corusel.sliderElementWidth);
            
        } else {
            props.changePositionSliderAC(props.corusel.clickCount * props.corusel.coruselStep);
        }
    }

    function clickHandler(e) {
        e.preventDefault();
        const leftArrow = document.querySelector('.corusel_leftArrow');
        const rightArrow = document.querySelector('.corusel_rightArrow');

        if (e.target === leftArrow) {
            if ( props.corusel.positionSlider === 0 ) return;
            props.leftSlideAC(++props.corusel.clickCount);
            sliderMoveOption();
        } else if (e.target === rightArrow) {
            // проверка - достигли ли мы максимального количества кликов вправо
            if (Math.ceil(splittingPages().common * -1)   === props.corusel.clickCount) {
                return;
            }
            props.leftSlideAC(--props.corusel.clickCount);
            sliderMoveOption();
        }
    }
    return (
        <div className='corusel'>
            <div className="corusel_arrow" >
                <img className='corusel_leftArrow' onClick={clickHandler} src={arrow} alt="left" />
            </div>
            <div className="corusel_content">
                <div className='corusel_pages-link' style={{transition: transform, transform: `translateX(${props.corusel.positionSlider}px)`}}>
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