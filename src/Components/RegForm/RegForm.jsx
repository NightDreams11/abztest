import React from 'react'
import styles from './RegForm.module.scss'
import cont from '../../App.module.scss';
import Button from '../Button/Button';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { emailValidationCreator, maxLengthCreator, minLengthCreator, phoneValidationCreator, photoValidator, radioValidator, required } from '../../utils/validators';
import { Input, MyFileComponent } from '../common/FormsControls/FormsControls';

const maxLength100 = maxLengthCreator(100);
const maxLength60 = maxLengthCreator(60);
const maxLength13 = maxLengthCreator(13);
const minLength2 = minLengthCreator(2);



const Form = (props) => {
    return <div>
        {/* onSubmit={props.handleSubmit} обязательный атрибут формы? */}
        <form className={styles.form}>
            <div className={styles.formContainer}>
                <div className={styles.fieldName}>
                    <Field className={styles.inputName} placeholder={"Your name"} component={Input} name={'name'} validate={[required, maxLength60, minLength2]}></Field>
                </div>
                <div className={styles.fieldEmail}>
                    <Field className={styles.inputEmail} placeholder={"Email"} component={Input} name={'email'} validate={[required, emailValidationCreator, maxLength100]}></Field>
                </div>
                <div className={styles.fieldPhone}>
                    <Field className={styles.inputPhone} placeholder={"Phone"} component={Input} name={'phone'} validate={[required, phoneValidationCreator, maxLength13]}></Field>
                </div>
                <div className={styles.positionsGroup}>
                    <label>Select your position</label>
                    <div className={styles.positions}>
                        {/* Атрибут value решил проблему с перескакивающей кнопкой radio button. Атрибут value может принимать только string значения или boolen для чекбоксов */}
                        {props.positionsId.map(p => <div className={styles.positionsInput} key={p.id}>
                            {/* Ранее был обёрнут в label, из-за чего в стейте не было position */}
                            <Field name={'position'} component={'input'} type={'radio'} value={String(p.id)} validate={radioValidator} id={p.id} className={styles.inputRadio} />{p.name}
                            <label className={styles.labelForInputRadio} htmlFor={p.id}></label>
                        </div>)}
                    </div>
                </div>
                <div>
                    {/* Загрузить фото с помощью redux-form помогло решение создать кастомный компонет MyFileComponent */}
                    <Field name={'photo'} component={MyFileComponent} type={"file"} dataAllowedFileExtensions="jpg png bmp" validate={[photoValidator, required]}></Field>
                </div>
                <div className={styles.button}>
                    {/* Таким образом кастомная кнопка может сабмитить форму благодаря onClick. Благодаря props.invalid кнопка реагирует на валидаторы. */}
                    <Button onClick={props.handleSubmit} disabled={props.pristine || props.invalid}></Button>
                </div>
            </div>
        </form >
    </div >
}

const ReduxRegForm = reduxForm({
    form: 'registration',
})(Form)

const RegForm = (props) => {
    const onSubmit = (formData) => {
        props.registrUser(formData.name, formData.email, formData.phone, formData.position, formData.photo)
    }

    return <section className={styles.regForm} id='sing up'>
        <div className={cont.container}>
            <h1>
                Register to get a work
            </h1>
            <h2>
                Your personal data is stored according to the Privacy Policy
            </h2>
            <div>
                <ReduxRegForm onSubmit={onSubmit} positionsId={props.positionsId}></ReduxRegForm>
            </div>
            <div className={styles.footprint}>
                <div className={styles.footprintImgBig}>
                    <img src="Images/Footprint.svg" alt="Footprint" />
                </div>
                <div className={styles.footprintImgMid}>
                    <img src="Images/Footprint2.svg" alt="Footprint" />
                </div>
                <div className={styles.footprintImgLow}>
                    <img src="Images/Footprint2.svg" alt="Footprint" />
                </div>
            </div>
        </div>
    </section>
}

let mapStateToProps = (state) => {

    return {
        formData: state.form
    }
}

export default connect(mapStateToProps, null)(RegForm);