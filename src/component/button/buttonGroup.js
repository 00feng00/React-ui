import React from 'react'
import style from './style.css'

class ButtonGroup extends React.Component {
    render() {
        return <div className={`${style["button-group"]}  ${style.style1}`}>
            {this.props.children}
        </div>
    }
}

export default ButtonGroup