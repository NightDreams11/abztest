import React from 'react'
import cont from '../../App.module.scss';
import styles from './Modal.module.scss'
import Button from '../Button/Button';

const Modal = (props) => {
    return <div className={styles.blur}>
        <div className={cont.container}>
            <div className={styles.modal}>
                <div className={styles.ContainerText}>
                    <h3>
                        Congratulations
                    </h3>
                    <div className={styles.text}>
                        You have successfully passed the registration
                    </div>
                </div>
                <div className={styles.button}>
                    <Button text={'Great'} onClick={() => props.toggleModal(false)}></Button>
                </div>
            </div>
        </div>
    </div>
}
export default Modal;