import React from 'react' // 引入react库
import dva from 'dva'; // 引入dva
import Progress from './index.js' // 引入index.js
import {routerRedux} from 'dva/router'; // 
import {MyMap, setHistory, uuid} from '../../util/uitls' // 引入三个方法
import "../../style/index.less" // 共用的样式
// import styles from  './style.css' // 引入样式
// import {r_array_length} from "../../util/lodash";

const {ConnectedRouter} = routerRedux;
var app = null;

app = dva({
    onError(error) {
        // message.destroy();
        // message.error(error.message);
        console.error(error.message)
    },
});

class Demo extends React.Component {
    //  constructor 属性返回对创建此对象的数组函数的引用
    constructor() {
        // super访问和调用一个对象的父对象上的函数
        super()
    }

    // 渲染函数
    render() {
        return <div>
            <Progress info={['信息1', '信息2', '这是信息描述','信息3']} isHorizon={true}></Progress>
        </div>
    }
}


if (IS_COMPONENT) {
    app.router(({history}) => {
        {
            setHistory(history)
        }
        return <ConnectedRouter history={history}>
            <Demo></Demo>
        </ConnectedRouter>
    })


    app.start("#root");
}


export default Demo



























