import React from 'react'
import dva from 'dva';
import {routerRedux} from 'dva/router';
import {setHistory} from '../../util/uitls'
import "../../style/index.less"
import Drawing from "./index";


class Demo extends React.Component {
    constructor(props) {
        super()
        this.state = {
            visiable: false
        }
    }

    render() {
        return <div>
            <button
                onClick={() => {
                    this.setState({visiable: !this.state.visiable})
                }}
            >show Drawing
            </button>
            <Drawing visible={this.state.visiable}
                     onClose={() => {

                         this.setState({visiable: !this.state.visiable})
                     }}
            >
                good
            </Drawing>
        </div>
    }
}

/*
const {ConnectedRouter} = routerRedux;
var app = null;

app = dva({
    onError(error) {
        // message.destroy();
        // message.error(error.message);
        console.error(error.message)
    },
});
app.router(({history}) => {
    {
        setHistory(history)
    }
    return <ConnectedRouter history={history}>
        <Demo/>
    </ConnectedRouter>
})
app.model(require("../../model/user").default)


app.start("#root");*/

export default Demo