import styles from './style.css'

import React from 'react'

import MyIconImage from '../MyIconImage'

const {useState, useEffect} = React;

const CheckBox = (props) => {
    var [checked, setChecked] = useState(props.checked)
    useEffect((e) => {
    });
    console.log(checked)
    return <div style={{display: 'inline-block'}}>
        <div className={styles.CheckBox} onClick={() => {
            props.onChange(!checked)
            setChecked(!checked)
        }}>
            {!checked && <MyIconImage image={"https://f.cangg.cn:82/data/2019019950585624.png"}></MyIconImage>}
            {checked && <MyIconImage image={"https://f.cangg.cn:82/data/2019019951118621.png"}></MyIconImage>}
            <div className={styles.children}>{props.children}</div>
        </div>
    </div>

}

CheckBox.defaultProps = {
    checked: false,
    onChange() {
    }
}
export default CheckBox