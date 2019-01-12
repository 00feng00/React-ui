import React from 'react'
import dva from 'dva';
import DateTime from './index.js'
import {routerRedux} from 'dva/router';
import {setHistory} from '../../util/uitls'
import "../../style/index.less"
import {timeFormat, trampToDate} from "../../util/date";
import Button from "../button";

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
            <DateTime value={this.state.date}
                      onChange={e => {
                          this.setState({date: e})
                      }}
            >{timeFormat(this.state.date, "YYYY-MM-DD HH:mm:ss")}</DateTime>
        </div>
    }
}


if (IS_COMPONENT) {
    app.model(require("../../model/app").default)
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