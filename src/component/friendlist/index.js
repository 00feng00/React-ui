import React from 'react'
import style from './style.css'
import {a_z} from "./containt";
import {closest, MyMap} from "../../util/lodash";
import {getHeight, uuid} from "../../util/uitls";
import {getLocal, setLocal} from "../../util/local";

class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
            active_zhimu: "a",
            offsetTopList: [],
            offsetTopList_obj: getLocal("offsetTopList_obj") || {}
        };
        this.scroll = this.scroll.bind(this)
    };


    scrollEnd() {

        var self = this
        var scrollTop = 0;
        if (!this.main_zhimu) return false
        scrollTop = this.main_zhimu.dataset.scrollTop
        var _a = closest(-scrollTop, this.state.offsetTopList, "offsetTop")
        self.setState({active_zhimu: _a.label})
    }

    click_zhimu(itemStr) {
        var self = this;
        var scrollTop = self.state.offsetTopList_obj[itemStr]
        document.body.scrollTop = scrollTop
        self.setState({active_zhimu: itemStr,})
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.scroll, true)
    }

    scroll(e) {
        var self = this;


        if (self.main_zhimu) {
            // self.main_zhimu.style.transform = `translateY(-${document.body.scrollTop}px)`;
            self.main_zhimu.dataset['scrollTop'] = -document.body.scrollTop;
        }
        self.scrollEndTimeout && clearTimeout(self.scrollEndTimeout)
        self.scrollEndTimeout = setTimeout(() => {
            self.scrollEnd()
        }, 250)
    }

    componentDidMount() {
        var self = this;
        var label_zhimus = document.querySelectorAll(".label_zhimu")
        var offsetTopList_obj = {}
        var offsetTopList = []

        document.addEventListener("scroll", this.scroll)


        setTimeout(() => {
            if (!getLocal("offsetTopList")) {
                MyMap(label_zhimus, item => {
                    offsetTopList_obj[item.innerText] = item.offsetTop
                    offsetTopList.push({
                        label: item.innerText,
                        offsetTop: item.offsetTop
                    })
                })
                self.setState({offsetTopList_obj, offsetTopList})
                setLocal("offsetTopList", offsetTopList)
                setLocal("offsetTopList_obj", offsetTopList_obj)

            } else {
                self.setState({offsetTopList: getLocal("offsetTopList")})
            }

        }, 500)
    }

    onClose() {
    }

    renderZhiMu(array, key) {
        var div1 = [<div
            key={uuid()}
            className={`${style.mainItemLabel} label_zhimu label_${key}`}>{key}</div>]
        var _array = MyMap(array, item1 => {
            return <div
                key={uuid()}
                className={style.mainItem}>
                {item1.name}
            </div>
        })
        return div1.concat(_array)
    }

    render() {
        var self = this
        var active_zhimu = this.state.active_zhimu
        return <section className={style.body} ref={(node) => this.body = node}>
            <div className={style.main} id={"main_zhimu"}
                 ref={(node) => this.main_zhimu = node}>
                {
                    MyMap(this.props.data, (item, key) => {
                        return self.renderZhiMu(item, key)
                    })
                }

            </div>
            <div className={style.right}>
                {
                    a_z.map(item => {
                        return <div
                            key={uuid()}
                            className={`${style.rigthItem}
                        ${active_zhimu == item ? style.active : ''}`}
                            onClick={this.click_zhimu.bind(this, item)}
                        >{item}</div>
                    })
                }
            </div>
        </section>
    }
}

FriendList.defaultProps = {
    data: require("./mockdata").default
}
export default FriendList