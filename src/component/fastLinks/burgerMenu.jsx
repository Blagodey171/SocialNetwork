import React, { useEffect } from 'react';
import './burgerMenu.scss';

const BurgerMenu = ( props ) => {
    useEffect(() => {
        const burgerMenu = document.querySelector('.burgerMenu-container');
        const sidebar = document.querySelector('.container-sidebar');
        const content = document.querySelector('.content-main');
        const overlayDiv = document.createElement('div');
        overlayDiv.classList.add('overlay')
        burgerMenu.addEventListener('click', (e) => {
            e.preventDefault();
            burgerMenu.classList.toggle('burgerMenu-active');
            if (burgerMenu.classList.contains('burgerMenu-active')) {
                sidebar.classList.add('activeBurgerMenu');
                content.insertAdjacentElement('beforebegin', overlayDiv)
            } else {
                sidebar.classList.remove('activeBurgerMenu');
                overlayDiv.remove()
            }
        })

        return burgerMenu.removeEventListener('click', ()=>{})
    })

    useEffect(() => {

    })
    return (
        <div className='burgerMenu-container'>
            <div className='baseLine'></div>
        </div>
    )
}

export default BurgerMenu;