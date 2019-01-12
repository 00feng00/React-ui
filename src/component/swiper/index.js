import styles from './style.css'
import React from 'react'
import {MyMap} from "../../util/lodash";
import {uuid} from "../../util/uitls";

class MySwiper extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        }, 300)

    }

    render() {
        return <div className={styles.swiper} style={{height: this.props.height}}>
            <div className={`swiper-container swiper-container-horizontal ${styles['swiper-container']}`}>
                <div className="swiper-wrapper"
                     style={{
                         transitionDuration: " 0ms",
                         transform: "translate3d(0px, 0px, 0px)"
                     }}>
                    {MyMap(this.props.children, item => {
                        return <div className={`swiper-slide ${styles.slider}`} key={uuid()}>{item}</div>
                    })}

                </div>
                <span className="swiper-pagination"></span>
            </div>
        </div>
    }
}

MySwiper.defaultProps = {
    height: 100
}

export default MySwiper