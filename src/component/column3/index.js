import React from 'react';
import styles from './style.css'


export class Column3 extends React.Component {
    constructor(props) {
        super()
        this.state = {}
    }

    componentDidMount() {
    }


    render() {
        var self = this
        var allSapn = 9
        return <div className={styles.Column3} style={{...this.props.myStyle}}>
            <div className={styles.left} style={{width: `${this.props.leftSpan / allSapn * 100}%`}}>
                {this.props.children[0]}
            </div>
            <div className={styles.center} style={{width: `${this.props.centerSpan / allSapn * 100}%`}}>
                {this.props.children[1]}
            </div>
            <div className={styles.right} style={{width: `${this.props.rightSpan / allSapn * 100}%`}}>
                {this.props.children[2]}
            </div>
        </div>
    }
}

/*9*/
Column3.defaultProps = {
    leftSpan: 3,
    centerSpan: 3,
    rightSpan: 3,
    children: [],
    myStyle: {}
}
export default Column3