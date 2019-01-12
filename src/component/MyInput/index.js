import styles from './style.css'

import React from 'react'

import MyIconImage from '../MyIconImage'

const {useState, useEffect} = React;
import {InputItem, List} from 'antd-mobile';
import {MyMap} from "../../util/lodash";

const MyInput = (props) => {
    var [isError, setIsError] = useState(false)
    var [errorMsg, setErrorMsg] = useState("")
    useEffect((e) => {
    });
    return <List className={styles.NumberInput}>
        <InputItem type={props.type}
                   error={isError}
                   extra={errorMsg}
                   onChange={(value) => {
                       var messages = []
                       MyMap(props.exps, item => {
                           if (!item.exp.test(value)) {
                               messages.push(item.message)
                           }
                       })
                       props.onChange(value, {success: messages.length == 0, result: messages})
                       setIsError(messages.length != 0)
                       setErrorMsg(messages.toString())

                   }}/>
    </List>
    // <div style={{display: 'inline-block'}}>
    //
    // </div>

}

MyInput.defaultProps = {
    type: "number",
    /*
    * bankCard
    * phone
    * password
    * number
    * money
    * */
    onChange() {
    },
    exps: []
}
export default MyInput