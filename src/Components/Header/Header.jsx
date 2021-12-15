import React from 'react'
import styles from './Header.module.scss'
import cont from '../../App.module.scss';
import BurgerMenu from './BurgerMenu/BurgerMenu';


const Header = (props) => {
    return <div className={props.isMenuOpen ? styles.headerNoScroll : styles.header}>
        <div className={cont.container}>
            <nav className={styles.menu}>
                <a>
                    <img src='Images/Logo.png' alt='logo'></img>
                </a>
                <ul>
                    <li className={styles.header_li}>
                        <a className={styles.link1} href='#main'>About me</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link2} href='#main'>Relationships</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link3} href='#requirements'>Requirements</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link4} href='#users'>Users</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link5} href='#sing up'>Sign Up</a>
                    </li>
                </ul>
                <div className={styles.burgerLogo}>
                    <a onClick={() => props.toggleBurgerMenu()}>
                        <img src='Images/menu.svg' alt='menu'></img>
                    </a>
                </div>
                <div className={styles.burgerMenu}>
                    {
                        props.isMenuOpen ? <BurgerMenu toggleBurgerMenu={props.toggleBurgerMenu}></BurgerMenu> : ''
                    }
                </div>
            </nav>
        </div>
    </div>
}

export default Header;