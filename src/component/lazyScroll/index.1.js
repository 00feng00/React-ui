import React from 'react';
import styles from './style.css'
import {getHeight} from "../../util/uitls";

export class LazyScroll extends React.Component {
    constructor(props) {
        super()
        this.state = {
            scrollHeight: 0,
            loading: false,
            nextCount: 0,
            isFinish: false,
        }
    }

    componentDidMount() {
        var self = this
        $(".LazyScroll").mousedown(function () {
            self.scrolling = true;
        }).mouseup(function () {
            self.scrolling = false;
            (async () => {
                debugger
                self.setState({
                    loading: true
                })
                var scrollHeight = self.state.scrollHeight;
                var contentHeight = self.state.contentHeight;
                var orignHeight = self.state.orignHeight;
                await  self.props.next.call(self, {
                    scrollHeight, contentHeight, orignHeight
                }).catch(e => {
                    self.setState({isFinish: true})
                })
                self.state.nextCount++;
            })()
        });
        $(".LazyScroll").scroll(function (e) {
            if (self.state.loading) {
                return false
            }
            if (self.state.isFinish) return false;
            var orignHeight = this.offsetHeight;
            var scrollHeight = this.scrollTop
            var contentHeight = this.scrollHeight
            if (scrollHeight + orignHeight >= contentHeight) {
                self.setState({
                    scrollHeight, contentHeight, loading: false,
                    nextCount: self.state.nextCount
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
        >
            {this.props.children}
            {this.state.loading && <div className={styles.loading}>loading...</div>}
        </div>
    }
}

LazyScroll.defaultProps = {
    next() {
    }
}
export default LazyScroll