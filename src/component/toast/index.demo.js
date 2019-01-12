import React from 'react'
import dva from 'dva';
import App from './index.js'
import {routerRedux} from 'dva/router';
import {MyMap, setHistory, uuid} from '../../util/uitls'
import "../../style/index.less"
import MyToast from "./index";

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
    constructor() {
        super()
        this.state = {
            length: 30
        }
    }

    render() {
        var self = this
        return <div>
            <button onClick={() => {
                MyToast.success("ok KKKKKKKKKKKKKKKKKKKKKKKK", {timeout: 30000,})
            }}>
                success 3s
            </button>
            <br/>

            <br/>
            <button onClick={() => {
                MyToast.loading()
                setTimeout(() => {
                    MyToast.clear()
                }, 2000)
            }}>loading
            </button>
            <br/>

            <br/>
            <button onClick={() => {
                MyToast.fail("no good")
            }}>fail
            </button>
            <br/>

            <br/>
            <button onClick={() => {
                MyToast.clear()
            }}>clear
            </button>
        </div>
    }
}


export default Demo
// app.router(({history}) => {
//     {
//         setHistory(history)
//     }
//     return <ConnectedRouter history={history}>
//         <Demo></Demo>
//     </ConnectedRouter>
// })
//
//
// app.start("#root");