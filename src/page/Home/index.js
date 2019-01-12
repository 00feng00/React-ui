import React from 'react';
import styles from './style.css'
// import { getHistory } from "../../util/uitls";
import pageRedux from '../pageRedux'
import {Link} from 'react-router-dom'
import HeaderNav from "../../component/HeaderNav";
import Accordion from "../../component/accordion";

class Home extends React.Component {
    constructor(props) {
        super()
        this.state = {
            hasMore: true,
            user: props.getStore("app.user"),
            offset: props.getStore("app.strangers_offset"),
            limit: props.getStore("app.strangers_limit")
        }
    }

    componentWillMount() {

    }

    async componentDidMount() {


    }


    render() {
        var self = this
        var accordionIndex = this.props.getStore("app.accordionIndex")
        return <div className={styles.home}>
            <HeaderNav title={"组件"}/>
            <div className={styles.body}>
                <Accordion title={"布局Layout"} style={{marginTop: 20}}
                           isOpen={accordionIndex == "布局Layout"}
                           onSelect={() => {
                               self.props.setStore("app.accordionIndex", "布局Layout")
                           }}
                >
                    <div className={styles.listItem}>
                        <Link to={"/component/column2"}>2列</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/column3"}>3列</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/flex"}>Flex/winkBlacnk/UpdownBlank</Link>
                    </div>
                </Accordion>

                <Accordion title={"导航Navigation"} style={{marginTop: 20}}
                           isOpen={accordionIndex == "导航Navigation"}
                           onSelect={() => {
                               self.props.setStore("app.accordionIndex", "导航Navigation")
                           }}
                >
                    <div className={styles.listItem}>
                        <Link to={"/component/drawing"}>抽屉</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/headernav"}>header</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/bubble"}>气泡组件</Link>
                    </div>
                </Accordion>

                <Accordion title={"数据录入"} style={{marginTop: 20}}
                           isOpen={accordionIndex == "数据录入"}
                           onSelect={() => {
                               self.props.setStore("app.accordionIndex", "数据录入")
                           }}
                >
                    <div className={styles.listItem}>
                        <Link to={"/component/button"}>按钮</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/myinput"}>输入框</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/addressinput"}>省市县选择</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/searchbar"}>搜索</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/calendar"}>日历组件</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/checkbox"}>多选checkbox</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/radio"}>单选radio</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/date"}>日期选择</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/datetime"}>日期时间选择</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/progress"}>进度条</Link>
                    </div>

                </Accordion>
                <Accordion title={"数据展示"} style={{marginTop: 20}}
                           isOpen={accordionIndex == "数据展示"}
                           onSelect={() => {
                               self.props.setStore("app.accordionIndex", "数据展示")
                           }}
                >
                    <div className={styles.listItem}>
                        <Link to={"/component/friendlist"}>通讯录列表</Link>
                    </div>

                    <div className={styles.listItem}>
                        <Link to={"/component/lazyscroll"}>无限加载</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/mytabs"}>tabs</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/swiper"}>滑动swiper</Link>
                    </div>
                </Accordion>
                <Accordion title={"操作反馈"} style={{marginTop: 20}}
                           isOpen={accordionIndex == "操作反馈"}
                           onSelect={() => {
                               self.props.setStore("app.accordionIndex", "操作反馈")
                           }}
                >
                    <div className={styles.listItem}>
                        <Link to={"/component/modal"}>modal</Link>
                    </div>


                    <div className={styles.listItem}>
                        <Link to={"/component/toast"}>提示</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to={"/component/accordion"}>手风琴</Link>
                    </div>
                </Accordion>


            </div>


        </div>
    }
}

export default pageRedux(Home)