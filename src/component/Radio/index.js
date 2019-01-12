import styles from './style.css'

import React from 'react'

import MyIconImage from '../MyIconImage'

const {useState, useEffect} = React;

const Radio = (props) => {
    var [checked, setChecked] = useState(props.checked)
    useEffect((e) => {
    });
    return <div style={{display: 'inline-block'}}>
        <div className={styles.CheckBox} onClick={() => {
            props.onChange(true)
            setChecked(true)
        }}>
            {!props.checked && <MyIconImage image={"https://f.cangg.cn:82/data/2019019950585624.png"}></MyIconImage>}
            {props.checked && <MyIconImage image={"https://f.cangg.cn:82/data/2019019951118621.png"}></MyIconImage>}
            <div className={styles.children}>{props.children}</div>
        </div>
    </div>

}

Radio.defaultProps = {
    checked: false,
    onChange() {
    }
}
export default Radio