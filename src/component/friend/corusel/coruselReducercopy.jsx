/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import arrow from '../../../img/corusel/arrow.svg';
import './corusel.scss';

const CoruselReducer = React.memo((props) => {
    const [currentPortion, setCurrentPortion] = useState(1);
    const [portionSize, setPortionSize] = useState(10);
    
    const portionsCount = props.pages.length / portionSize;
    const leftPortionPageNumber = (currentPortion - 1) * portionSize;
    const rightPortionPageNumber = (currentPortion * portionSize) - 1;

    const maxWidthWindow = useMediaQuery({ query: '(max-width:700px)' });
    const maxWidthWindowRef = useRef(maxWidthWindow);

    const showArr = () => {
        return props.pages.filter( (span, index) => index >= leftPortionPageNumber && index <= rightPortionPageNumber )
    }
    const moveSliderLeft = () => {
        if (currentPortion === 1) return
        setCurrentPortion(currentPortion - 1)
    }
    const moveSliderRight = () => {
        if (Math.ceil(portionsCount) === currentPortion) return
        setCurrentPortion(currentPortion + 1)
    }
    useEffect(() => {
        maxWidthWindowRef.current ? setPortionSize(5) : setPortionSize(10)
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
})

export default CoruselReducer;
