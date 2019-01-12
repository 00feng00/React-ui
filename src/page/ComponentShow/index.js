import React from 'react';
import styles from './style.css'
import pageRedux from '../pageRedux'
import {Link} from 'react-router-dom'
import {setHistory} from "../../util/uitls";


import {Route, Switch} from "react-router-dom";
import Loading from "../../component/Loading";
import Loadable from 'react-loadable';
import HeaderNav from "../../component/HeaderNav";


const Bubble = Loadable({
    loader: () => import('../../component/Bubble/index.demo.js'),
    loading: Loading
});
const Button = Loadable({
    loader: () => import('../../component/Button/index.demo.js'),
    loading: Loading
});

const Calander = Loadable({
    loader: () => import('../../component/calander/index.demo.js'),
    loading: Loading
});
const Column2 = Loadable({
    loader: () => import('../../component/column2/index.demo.js'),
    loading: Loading
});
const Column3 = Loadable({
    loader: () => import('../../component/column3/index.demo.js'),
    loading: Loading
});
const Drawing = Loadable({
    loader: () => import('../../component/drawing/index.demo.js'),
    loading: Loading
});
const Friendlist = Loadable({
    loader: () => import('../../component/friendlist/index.demo.js'),
    loading: Loading
});
const HeaderNav1 = Loadable({
    loader: () => import('../../component/HeaderNav/index.demo.js'),
    loading: Loading
});
const LazyScroll = Loadable({
    loader: () => import('../../component/lazyScroll/index.demo.js'),
    loading: Loading
});
const Modal = Loadable({
    loader: () => import('../../component/mymodal1/index.demo.js'),
    loading: Loading
});
const MyTabs = Loadable({
    loader: () => import('../../component/MyTabs/index.demo.js'),
    loading: Loading
});
const SearchBar = Loadable({
    loader: () => import('../../component/searchBar/index.demo.js'),
    loading: Loading
});
const Swiper = Loadable({
    loader: () => import('../../component/Swiper/index.demo.js'),
    loading: Loading
});
const Toast = Loadable({
    loader: () => import('../../component/Toast/index.demo.js'),
    loading: Loading
});
const Accordion = Loadable({
    loader: () => import('../../component/accordion/index.demo.js'),
    loading: Loading
});
const AddressInput = Loadable({
    loader: () => import('../../component/addressInput/index.demo.js'),
    loading: Loading
});
const Checkbox = Loadable({
    loader: () => import('../../component/Checkbox/index.demo.js'),
    loading: Loading
});


const MyDate = Loadable({
    loader: () => import('../../component/Date/index.demo.js'),
    loading: Loading
});
const Datetime = Loadable({
    loader: () => import('../../component/Datetime/index.demo.js'),
    loading: Loading
});
const Radio = Loadable({
    loader: () => import('../../component/Radio/index.demo.js'),
    loading: Loading
});
const MyInput = Loadable({
    loader: () => import('../../component/MyInput/index.demo.js'),
    loading: Loading
});
const Progress = Loadable({
  loader: () => import('../../component/progress/index.demo.js'),
  loading: Loading
});
const Flex = Loadable({
    loader: () => import('../../component/flex/index.demo.js'),
    loading: Loading
});



class ComponentShow extends React.Component {
    constructor(props) {
        super()

    }

    componentWillMount() {

    }

    async componentDidMount() {
        setTimeout(() => {
            document.body.scrollTop = 0
        }, 300)

    }


    render() {
        var self = this
        return <div className={styles.home}>
            <HeaderNav title={"组件展示"}/>

            <div className={styles.body}>
                <Switch>
                    <Route exact path="/component/addressinput" component={AddressInput}/>
                    <Route exact path="/component/bubble" component={Bubble}/>
                    <Route exact path="/component/button" component={Button}/>
                    <Route exact path="/component/calendar" component={Calander}/>
                    <Route exact path="/component/column2" component={Column2}/>
                    <Route exact path="/component/column3" component={Column3}/>
                    <Route exact path="/component/checkbox" component={Checkbox}/>
                    <Route exact path="/component/date" component={MyDate}/>
                    <Route exact path="/component/datetime" component={Datetime}/>
                    <Route exact path="/component/drawing" component={Drawing}/>
                    <Route exact path="/component/friendlist" component={Friendlist}/>
                    <Route exact path="/component/headernav" component={HeaderNav1}/>
                    <Route exact path="/component/lazyscroll" component={LazyScroll}/>
                    <Route exact path="/component/modal" component={Modal}/>
                    <Route exact path="/component/mytabs" component={MyTabs}/>
                    <Route exact path="/component/radio" component={Radio}/>
                    <Route exact path="/component/searchbar" component={SearchBar}/>
                    <Route exact path="/component/swiper" component={Swiper}/>
                    <Route exact path="/component/toast" component={Toast}/>
                    <Route exact path="/component/accordion" component={Accordion}/>
                    <Route exact path="/component/myinput" component={MyInput}/>
                    <Route exact path="/component/progress" component={Progress}/>
                    <Route exact path="/component/flex" component={Flex}/>
                </Switch>
            </div>
        </div>
    }
}

export default pageRedux(ComponentShow)