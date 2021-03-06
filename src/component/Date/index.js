import styles from './style.css'

import React from 'react'
import {DatePickerView} from 'antd-mobile';
import {BottomModal} from "../mymodal1/bottomModal";
import {getWidth} from "../../util/uitls";

const {useState, useEffect} = React;

const MyDate = (props) => {
    var [visiable, setVisiable] = useState(false)
    var [date, setDate] = useState(props.value)
    useEffect((e) => {
    });
    return <div style={{display: 'inline-block'}}>
        <div className={styles.datetime} onClick={() => {
            setVisiable(true)
        }}>
            {props.children}
        </div>
        <BottomModal visiable={visiable} width={getWidth()}
                     onClose={() => {
                         setVisiable(false)
                     }}
                     onOk={() => {
                         props.onChange(date)
                     }}
        >
            <DatePickerView
                mode={"date"}
                value={date}
                onChange={(e) => {
                    setDate(e)
                }}
            />
        </BottomModal>
    </div>

}

MyDate.defaultProps = {
    value: new Date(),
    onChange() {
    }
}
export default MyDate