import React from 'react'
import {uuid} from "../../util/uitls";
import style from './style.css'

class MyIconImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visible: props.visible,};
    };


    componentWillReceiveProps(nextProps) {
    }


    onClose() {
        this.props.onClose()
    }

    render() {
        var self = this
        return <section className={style.imageWrapper} onClick={() => {
            self.props.onClick()
        }}
                        style={{...this.props.myStyle}}>
            <img src={this.props.image} alt="" {...this.props.className}/>
        </section>
    }
}

MyIconImage.defaultProps = {
    image: false,
    onClick() {
    }
}
export default MyIconImage