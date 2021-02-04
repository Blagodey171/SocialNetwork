import React, { useEffect } from 'react';
import './burgerMenu.scss';

const BurgerMenu = ( props ) => {
    const openBurger = (e) => {
        e.preventDefault();
        
    }
    useEffect(() => {
        const burgerMenu = document.querySelector('.burgerMenu-container');
        burgerMenu.addEventListener('click', (e) => {
            e.preventDefault();
            burgerMenu.classList.toggle('burgerMenu-active');
        })

        return burgerMenu.removeEventListener('click', ()=>{})
    })
    return (
        <div className='burgerMenu-container'>
            <div className='baseLine'></div>
        </div>
    )
}

export default BurgerMenu;