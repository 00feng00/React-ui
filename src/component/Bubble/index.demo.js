import React from 'react'
import dva from 'dva';
import {routerRedux} from 'dva/router';
import {MyMap, setHistory, uuid} from '../../util/uitls'
import "../../style/index.less"
import Bubble from "./index";

const {ConnectedRouter} = routerRedux;
var app = null;
app = dva({
    onError(error) {
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
        return <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Bubble menus={() => <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>}>
                <button style={{
                    position: 'relative',
                }}>
                    button
                </button>
            </Bubble>

            <Bubble menus={() => <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>}>
                <button style={{
                    position: 'relative',
                }}>
                    button
                </button>
            </Bubble>

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


    app.start("#root")
}
export default Demo



