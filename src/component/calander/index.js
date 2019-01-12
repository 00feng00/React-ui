import React from 'react';
import styles from './style.css'

import {Calendar} from 'antd-mobile';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';

export class MyCalender extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
    }


    render() {
        var self = this
        var allSapn = 9
        const now = new Date();
        return <div className={styles.calander} style={{...this.props.myStyle}}>
            <Calendar
                visible={this.props.visible}
                onCancel={this.props.onCancel}
                onConfirm={this.props.onConfirm}
                defaultDate={now}
                type={this.props.type}
                minDate={new Date(+now - 5184000000)}
                maxDate={new Date(+now + 31536000000)}
            />
        </div>
    }
}

/*9*/
MyCalender.defaultProps = {
    visible: false,
    type: 'range',
    onConfirm() {
    },
    onCancel() {
    },
}
export default MyCalender