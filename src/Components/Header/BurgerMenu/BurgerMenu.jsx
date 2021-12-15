import React from 'react'
import styles from './BurgerMenu.module.scss'

const BurgerMenu = (props) => {
    return <div className={styles.blur} onClick={() => props.toggleBurgerMenu()} >
        <div className={styles.main}>
            <nav className={styles.menu}>
                <a>
                    <img src='Images/Logo.png' alt='logo'></img>
                </a>
                <ul>
                    <li className={styles.header_li}>
                        <a className={styles.link} href='#main'>About me</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link} href='#main'>Relationships</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link} href='#users'>Users</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link} href='#sing up'>Sing Up</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link}>Terms and Conditions</a>
                    </li>


                    <li className={styles.header_li}>
                        <a className={styles.link}>How it works</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link}>Partnership</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link}>Help</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link}>Level testimonial</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link}>Contact us</a>
                    </li>


                    <li className={styles.header_li}>
                        <a className={styles.link}>Articles</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link}>Our news</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link}>Testimonials</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link}>Licenses</a>
                    </li>
                    <li className={styles.header_li}>
                        <a className={styles.link}>Privacy Policy</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div >
}

export default BurgerMenu;