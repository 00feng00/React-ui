import React from 'react'
import styles from './style.css'
import MyIconImage from "../MyIconImage";


class Button extends React.Component {
    constructor() {
        super()
    }


    componentDidMount() {


    }


    render() {
        var self = this;
        var color = this.props.color
        var _color = ""
        var _color_dark = ""
        if (color == "blue") {
            _color = "#108ee9"
            _color_dark = "#0f78c9"
        }
        if (color == "red") {
            _color = "#e94f4f"
            _color_dark = "#b34040"
        }
        return <div
            ref={node => self.node = node}
            className={`${styles.button}`}
            style={{
                color: color ? "#fff" : "#222",
                background: _color,
                border: `1px solid ${_color || "#eee"}`,
                opacity: this.props.disabled ? .5 : 1,
                display: this.props.type
            }}
            {...this.props}
            onTouchStart={() => {
                self.node.style.background = _color_dark || "#eee"
            }}
            onTouchEnd={() => {
                self.node.style.background = _color || "#fff"
            }}
            onMouseDown={() => {
                self.node.style.background = _color_dark || "#eee"
            }}
            onMouseUp={() => {
                self.node.style.background = _color || "#fff"
            }}
            onClick={() => {
                if (!this.props.disabled && !this.props.isLoading) {
                    this.props.onClick()
                }

            }}
        >
            {!this.props.isLoading && <span className={styles.span}>{this.props.children}</span>}
            {this.props.isLoading &&
            <span className={styles.span}><MyIconImage
                image={"https://f.cangg.cn:82/data/20190182037297399.gif"}></MyIconImage></span>

            }
        </div>
    }
}

Button.defaultProps = {
    onClick: () => {
    },
    color: "",
    disabled: false,
    isLoading: false,
    type: 'inline-block'
}

export default Button
