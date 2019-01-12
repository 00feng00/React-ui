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
        var allSapn = 10
        return <div className={styles.Column3} style={{...this.props.myStyle}}>
            <div className={styles.span1} style={{width: `${this.props.span1 / allSapn * 100}%`}}>
                {this.props.children[0]}
            </div>
            <div className={styles.span2} style={{width: `${this.props.span2 / allSapn * 100}%`}}>
                {this.props.children[1]}
            </div>
        </div>
    }
}

/*9*/
Column3.defaultProps = {
    span1: 5,
    span2: 5,
    children: [],
    myStyle: {}
}
export default Column3