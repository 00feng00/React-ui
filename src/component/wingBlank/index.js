import styles from './style.css'

const WingBlank = (props) => {
    return <div className={styles.wingblank}>
        {props.children}
    </div>
}

export default WingBlank