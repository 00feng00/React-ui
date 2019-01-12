import React from 'react'
import styles from './style.css'
import BubbleModal from "./BubbleModal";


class Bubble extends React.Component {
    constructor() {
        super()
        this.state = {
            visiable1: false,
            top: 0,
            left: 0,
            nodeStyle: {}
        }
        this.onClose1 = this.onClose1.bind(this)
    }

    onClose1() {
        var self = this
        setTimeout(() => {
            self.setState({visiable1: false})
        }, 300)

    }

    onInit() {
        var self = this;
        var offsetWidth = self.node.children[0].offsetWidth
        var offsetHeight = self.node.children[0].offsetHeight
        var offsetTop = self.node.children[0].offsetTop
        var offsetLeft = self.node.children[0].offsetLeft

        var top = offsetTop + offsetHeight + 10
        var left = offsetLeft + offsetWidth / 2 + (window.innerWidth - document.body.offsetWidth) / 2
        self.setState({
            top, left, nodeStyle: {
                width: self.node.children[0].style.width,
                height: self.node.children[0].style.height,
            }
        })
    }

    componentDidMount() {
        var self = this;
        setTimeout(() => {
            self.onInit.call(self)
        }, 300)


        window.onresize = function (event) {
            self.onInit.call(self)
        };
    }


    render() {
        var self = this;
        var top = this.state.top
        var left = this.state.left
        return <div className={styles.bubble}
                    ref={node => this.node = node}
                    style={{...this.state.nodeStyle}}
                    onClick={() => {
                        self.setState({visiable1: true})
                    }}>
            <BubbleModal visiable={this.state.visiable1}
                         top={top}
                         left={left}
                         onClose={self.onClose1}>
                {self.props.menus()}
            </BubbleModal>
            {this.props.children}
        </div>
    }
}

Bubble.defaultProps = {
    menus: () => {
    }
}
export default Bubble
