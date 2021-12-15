import React from 'react'
import styles from './Main.module.scss'
import cont from '../../App.module.scss';
import Button from '../Button/Button';

const Main = (props) => {
    return (
        <section className={styles.main} id='main'>
            <div className={cont.container}>
                <div className={styles.banner}>
                    <img src="Images/Banner_photo.jpg" alt="banner" />
                </div>
                <div className={styles.item}>
                    <h1>
                        Test assignment for front-end developers
                    </h1>
                    <div className={styles.item_text1}>
                        Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion. Therefore, responsive design, programming languages and specific frameworks are the must-have skillsets to look for when assessing your front-end developers.
                    </div>
                    <div className={styles.item_text2}>
                        Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion.
                    </div>
                    <div className={styles.item_button}>
                        <Button></Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;