import React from 'react'
import dva from 'dva';
import HeaderNav from './index.js'
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
            <br/>
            <br/>
            <HeaderNav title={"test this is title"}
                       myStyle={{position: 'relative'}}
            />
        </div>
    }
}

if(IS_COMPONENT){
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