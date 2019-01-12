import React from 'react'
import dva from 'dva';
import Swiper from './index.js'
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
            length: 30
        }
    }

    render() {
        var self = this
        return <div>
            <Swiper>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </Swiper>
        </div>
    }
}

// app.router(({history}) => {
//     {
//         setHistory(history)
//     }
//     return <ConnectedRouter history={history}>
//
//     </ConnectedRouter>
// })
//
//
// app.start("#root");

export default Demo