import React from 'react'
import dva from 'dva';
import MyTabs from './index.js'
import {routerRedux} from 'dva/router';
import {MyMap, setHistory, uuid} from '../../util/uitls'
import "../../style/index.less"

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
            defaultTab: "第二个"
        }
    }

    render() {
        var self = this
        const tabs = [
            {
                title: "第一个", component() {
                    return <div>
                        第一个
                    </div>
                }
            },
            {
                title: "第二个", component() {
                    return <div>
                        第二个
                    </div>
                }
            }
        ]
        return <div>
            <MyTabs
                tabs={tabs}
                defaultTab={this.state.defaultTab}
            />
        </div>
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

export  default  Demo