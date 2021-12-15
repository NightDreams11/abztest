import React from 'react'
import styles from './DisabledButton.module.scss'

const DisabledButton = (props) => {
    return (
        <div className={styles.button}>
            <a>
                Disabled
            </a>
        </div>
    )
}

export default DisabledButton;