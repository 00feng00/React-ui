import React from 'react'
import dva from 'dva';
import App from './index.js'
import {routerRedux} from 'dva/router';
import {MyMap, setHistory, uuid} from '../../util/uitls'
import "../../style/index.less"
import FriendList from "./index";
import pageRedux from "../../page/pageRedux";

const {ConnectedRouter} = routerRedux;
var app = null;
app = dva({
    onError(error) {
        // message.destroy();
        // message.error(error.message);
        console.error(error.message)
    },
});
app.model(require('../../model/app').default)

class _Demo extends React.Component {
    constructor() {
        super()
        this.state = {
            length: 30
        }
    }

    render() {
        var self = this
        return <div>
            <FriendList/>
        </div>
    }
}

// const Demo = pageRedux(_Demo)
//
// app.router(({history}) => {
//     {
//         setHistory(history)
//     }
//     return <ConnectedRouter history={history}>
//         <Demo/>
//     </ConnectedRouter>
// })
// app.start("#root");
export default _Demo
