import React from 'react'
import styles from './Button.module.scss'

const Button = (props) => {

    const Foo = () => { }
    const isDisabled = () => {
        if (props.disabled === undefined) {
            return false;
        }
        if (props.disabled === true) {
            return true
        }
        return false;
    }

    const onClickHandler = () => {
        // props.onClick === undefined ? Foo : props.onClick
        if (props.onClick === undefined || isDisabled()) {
            return false;
        }
        return true
    }

    return (
        <div className={isDisabled() ? styles.disabled : styles.button} onClick={onClickHandler() ? props.onClick : Foo} >
            <a>
                {props.text === undefined ? 'Sign Up' : props.text}
            </a>
        </div>
    )
}

export default Button;