import React from 'react'
import dva from 'dva';
import {routerRedux} from 'dva/router';
import {setHistory} from '../../util/uitls'
import "../../style/index.less"
import {trampToDate} from "../../util/date";
import Button from "../button";
import Radio from "./index";

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
            date: new Date(),
            data: {
                a: true,
                b: false
            }
        }
    }

    render() {
        return <div>
            <Radio onChange={(e) => {
                this.setState({
                    data: {
                        a: true, b: false
                    }
                })
            }}
                   checked={this.state.data.a}>苹果</Radio>
            <Radio checked={this.state.data.b}
                   onChange={(e) => {
                       this.setState({
                           data: {
                               a: false, b: true
                           }
                       })
                   }}
            >西瓜</Radio>
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