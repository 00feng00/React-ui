import styles from './style.css'

const UpdownBlank = (props) => {
    return <div className={styles.UpdownBlank}>
        {props.children}
    </div>
}

export default UpdownBlank