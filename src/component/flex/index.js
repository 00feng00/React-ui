import {useState, useEffect} from 'react';
import styles from './style.css'

const FlexItem = (props) => {
    return <div className={styles.flexItem}
                style={{flex: props.span}}
                {...props}>
        {props.children}
    </div>
}
FlexItem.defaultProps = {
    span: 1
}
const Flex = (props) => {
    return <div className={styles.flex} {...props}>
        {props.children}
    </div>
}
Flex.Item = FlexItem
export default Flex