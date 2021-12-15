import React from "react"
import styles from "./FormsControls.module.scss"

export const Textarea = (props) => {
    let hasError = props.hasError;
    if (!props.isDirty) {
        hasError = false;
    }
    return (
        <div className={styles.formControl}>
            <textarea defaultValue={props.text} placeholder={'Upload your photo'} className={!hasError ? styles.textarea : styles.textarea + " " + styles.error}></textarea>
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {
    let hasError = meta.touched && meta.error;
    const isActive = meta.active;
    return (
        <div className={styles.formControl}>
            <label className={!hasError ? (!isActive ? styles.formControl : styles.formControl + " " + styles.active) : styles.formControl + " " + styles.error}>
                <input {...input} {...props} ></input>
                {hasError ? <span className={styles.spanError}>{meta.error}</span> : ''}
            </label>
        </div>
    )
}

export class MyFileComponent extends React.Component {
    fileInput = React.createRef();
    render() {
        const { input, dataAllowedFileExtensions, } = this.props
        let hasError = this.props.meta.invalid;
        const isDirty = this.props.meta.dirty;
        if (!isDirty) {
            hasError = false;
        }
        const onInputChange = (e) => {
            e.preventDefault();
            const files = [...e.target.files];
            input.onChange(files);
        };
        return (
            <div className={styles.formControl}>
                <div className={styles.container}>
                    <input type="file"
                        onChange={onInputChange}
                        data-allowed-file-extensions={dataAllowedFileExtensions}
                        ref={this.fileInput}
                        className={styles.inputPhoto}
                        id={'photo'}
                    />
                    <label htmlFor={"photo"} className={!hasError ? styles.label : styles.label + " " + styles.error}>Upload</label>
                    {/* this.fileInput.current == null ? '' : this.fileInput.current.files[0] == null ? '' : this.fileInput.current.files[0].name */}
                    <Textarea text={this.fileInput.current?.files[0]?.name ?? ''} hasError={hasError} meta={this.props.meta} isDirty={isDirty}></Textarea>
                    {hasError ? <span className={styles.spanErrorFortextaream}>{this.props.meta.error}</span> : ''}
                </div>
            </div>
        )
    }
}