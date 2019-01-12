import React from 'react'
import dva from 'dva';
import App from './index.js'
import {routerRedux} from 'dva/router';
import {MyMap, setHistory, uuid} from '../../util/uitls'
import "../../style/index.less"
import {r_array_length} from "../../util/lodash";

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
        return <App
            height={600}
            next={(params) => {
                if (self.state.length >= 100) {
                    return Promise.reject(false)
                }
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(params)
                        self.state.length += 10;
                        self.setState({length: self.state.length})
                    }, 1000)
                })
            }}
        >
            {
                MyMap(r_array_length(this.state.length), item => {
                    return <div style={{height: 30}} key={uuid()}>{item}</div>
                })

            }
        </App>
    }
}

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

export default Demo