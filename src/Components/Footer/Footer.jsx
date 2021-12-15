import React from 'react'
import styles from './Footer.module.scss'

const Footer = (props) => {
    return <section>
        <div className={styles.footer}>
            <div className={styles.title}>
                © abz.agency specially for the test task
            </div>
        </div>
    </section>
}

export default Footer;