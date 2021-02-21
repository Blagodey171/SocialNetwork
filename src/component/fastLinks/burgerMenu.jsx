import React, { useEffect } from 'react';
import './burgerMenu.scss';

const BurgerMenu = (props) => {
    useEffect(() => {
        const burgerMenu = document.querySelector('.burgerMenu-container');
        const sidebar = document.querySelector('.container-sidebar');
        const content = document.querySelector('.content-main');
        const overlayDiv = document.createElement('div');
        overlayDiv.classList.add('overlay');

        let removeListener = () => {
            window.removeEventListener('resize', () => { })
            window.removeEventListener('click', () => { })
        }

        window.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(e.target)
            if (e.target === burgerMenu || e.target.parentNode === burgerMenu) {
                burgerMenu.classList.toggle('burgerMenu-active');
                if (burgerMenu.classList.contains('burgerMenu-active')) {
                    sidebar.classList.add('activeBurgerMenu');
                    content.insertAdjacentElement('beforebegin', overlayDiv)
                } else {
                    sidebar.classList.remove('activeBurgerMenu');
                    overlayDiv.remove()
                }
            } else {
                if(e.target === sidebar)return
                burgerMenu.classList.remove('burgerMenu-active');
                sidebar.classList.remove('activeBurgerMenu');
                overlayDiv.remove()
            }
        })
        window.addEventListener('resize', e => {
            if (burgerMenu.classList.contains('burgerMenu-active')) {
                burgerMenu.classList.remove('burgerMenu-active');
                sidebar.classList.remove('activeBurgerMenu');
                overlayDiv.remove()
            }
        })
        return removeListener();
    })

    return (
        <div className='burgerMenu-container'>
            <div className='baseLine'></div>
        </div>
    )
}

export default BurgerMenu;