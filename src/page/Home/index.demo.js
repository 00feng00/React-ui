import React from 'react'
import dva from 'dva';
import App from './index.js'
import {routerRedux} from 'dva/router';
import {setHistory} from '../../util/uitls'
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

app.model(require("../../model/user").default)
app.router(({history}) => {
    {
        setHistory(history)
    }
    return <ConnectedRouter history={history}>
        <App/>
    </ConnectedRouter>
})


app.start("#root");