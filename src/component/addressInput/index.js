import styles from './style.css'

import React from 'react'

import MyIconImage from '../MyIconImage'
import {BottomModal} from "../mymodal1/bottomModal";
import {getWidth} from "../../util/uitls";
import {PickerView} from 'antd-mobile'
import Script from 'react-load-script'

const {useState, useEffect} = React;


var DATA = []

const handleScriptLoad = () => {
    DATA = window.province_city_area.default
}


var LoadScript = () => <Script
    url="http://lazytai.gitee.io/staticweb/js/province_city_area.min.js"
    onLoad={handleScriptLoad.bind(this)}
/>
const AddressInput = (props) => {
    var [visiable, setVisiable] = useState(false)
    var [value, setValue] = useState(props.value)
    useEffect((e) => {
    });

    return <div style={{display: "inline-block"}}>
        <LoadScript/>
        <div className={styles.AddressInput}>
            <div className={styles.children}
                 onClick={() => {
                     setVisiable(true)
                 }}>{props.children}</div>
            <BottomModal visiable={visiable}
                         width={getWidth()}
                         onOk={() => {
                             props.onChange(value)
                             setVisiable(false)
                         }}
                         onClose={() => {
                             setVisiable(false)
                         }}>
                <PickerView cascade={true}
                            value={value}
                            data={DATA}
                            onChange={e => {
                                setValue(e)
                            }}
                ></PickerView>
            </BottomModal>
        </div>
    </div>


}

AddressInput.defaultProps = {
    value: [],
    onChange() {
    }
}

export default AddressInput