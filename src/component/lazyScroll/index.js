import React from 'react';
import styles from './style.css'
import {getHeight} from "../../util/uitls";
import MyIconImage from "../MyIconImage";

export class LazyScroll extends React.Component {
    constructor(props) {
        super()
        this.state = {
            scrollHeight: 0,
            isLoading: false,
            nextCount: 0,
            isFinish: false,
            isPullBottom: false,
            translateY: 0,
            transition: undefined,
            isBottomLoading: false
        }
    }

    componentDidMount() {
        var self = this

        this.scrollWatch()
    }

    onTouchStart(e) {
        var self = this
        if (this.state.isLoading) return false

        if (self.dom.scrollTop == 0) {
            self.beforeTranslateY1 = e.touches[0].pageY
            self.setState({isLoading: false, transition: undefined})

        }

    }

    onTouchEnd(e) {
        var self = this
        if (this.state.isLoading) return false
        if (self.dom.scrollTop == 0) {
            self.setState({translateY: -0, transition: "all .5s ease", isPullBottom: false, isLoading: true})
            this.props.next().then(res => {
                self.setState({isLoading: false, translateY: 0})
                return Promise.resolve(res)
            }).catch(e => {
                self.setState({isLoading: false, translateY: 0})
                return Promise.reject(e)
            })
        }

    }

    onTouchMove(e) {
        var self = this
        if (this.state.isLoading) return false
        if (self.dom.scrollTop == 0) {
            self.beforeTranslateY2 = e.touches[0].pageY
            var translateY = self.beforeTranslateY2 - self.beforeTranslateY1
            self.setState({translateY: translateY, isPullBottom: true,})
        }
    }


    scrollWatch() {
        var self = this
        $(".LazyScroll").scroll(e => {
            self.dom = e.target
            var contentHeight = self.dom.scrollHeight;
            var seeHeight = self.dom.offsetHeight
            var scrollTop = self.dom.scrollTop
            if (contentHeight - scrollTop <= seeHeight) {
                self.beforeScrollTop = scrollTop
                if (self.state.isBottomLoading) return false
                self.setState({isBottomLoading: true}, () => {
                    self.props.next().then(res => {
                        self.dom.scrollTop = self.beforeScrollTop
                        self.setState({isBottomLoading: false})
                        return Promise.resolve(res)
                    }).catch(e => {
                        self.dom.scrollTop = self.beforeScrollTop
                        self.setState({isBottomLoading: false,})
                        return Promise.reject(e)
                    })
                })

            }
        })
    }


    render() {
        var self = this
        var height = this.props.height > getHeight() ? getHeight() : this.props.height

        return <div title="LazyScroll"
                    className={`${styles.LazyScroll} LazyScroll`}
                    style={{height: height}}
                    ref={node => this.dom = node}
        >
            <div
                style={{
                    transition: this.state.transition,
                    transform: `translateY(${this.state.translateY}px)`,
                }}
                onTouchStart={this.onTouchStart.bind(this)}
                onTouchEnd={this.onTouchEnd.bind(this)}
                onTouchMove={this.onTouchMove.bind(this)}>
                {this.state.isLoading && <div className={styles.shadow}>
                    <MyIconImage
                        myStyle={{width: 50, height: 50}}
                        image={"https://f.cangg.cn:82/data/20190191830435853.gif"}></MyIconImage>加载ing
                </div>}
                {this.state.isPullBottom && <div className={styles.shadow}>
                    释放加载
                </div>}
                {this.props.children}
                {
                    this.state.isBottomLoading && <div className={styles.bottomLoading}>loading...</div>
                }

            </div>
        </div>

    }
}

LazyScroll.defaultProps = {
    next() {
    }
}
export default LazyScroll