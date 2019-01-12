import React from 'react'
import dva from 'dva';
import SearchBar from './index.js'
import {routerRedux} from 'dva/router';
import {setHistory} from '../../util/uitls'
import "../../style/index.less"
import {trampToDate} from "../../util/date";

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
            visible: false,
            date: new Date()
        }
    }

    render() {
        return <div>
            <SearchBar myStyle={{position: 'relative', top: 40}}></SearchBar>
        </div>
    }
}

// app.model(require("../../model/user").default)
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