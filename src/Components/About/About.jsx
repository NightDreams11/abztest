import React from 'react'
import styles from './About.module.scss'
import cont from '../../App.module.scss';
import Button from '../Button/Button';

const About = (props) => {
    return <section className={styles.about} id='requirements'>
        <div className={cont.container}>
            <div className={styles.container_items}>
                <div className={styles.img_item1}>
                    <img src="Images/about387x340.png" alt="table" />
                </div>
                <div className={styles.img_item2}>
                    <img src="Images/about328x287.svg" alt="table" />
                </div>
                <div className={styles.img_item3}>
                    <img src="Images/about296x260.svg" alt="table" />
                </div>
                <div className={styles.text_item}>
                    <h1>
                        Let's get acquainted
                    </h1>
                    <h2>
                        I'm a good front-end developer
                    </h2>
                    <div className={styles.text}>
                        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                    </div>
                    <div className={styles.button_text}>
                        <div className={styles.button_text_div}>
                            <Button></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default About;