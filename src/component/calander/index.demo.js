import React from 'react'
import dva from 'dva';
import MyCalender from './index.js'
import {routerRedux} from 'dva/router';
import {setHistory} from '../../util/uitls'
import "../../style/index.less"
import {trampToDate} from "../../util/date";
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
            <div> date: {trampToDate({date: this.state.date})}</div>

            <Button onClick={() => {
                this.setState({visible: true})
            }}>
                show calendar one
            </Button>

            <MyCalender
                defaultDate={[this.state.date]}
                type={'one'}
                visible={this.state.visible}
                onConfirm={(e) => {
                    this.setState({
                        date: e,
                        visible: false,
                    })
                }}
            ></MyCalender>
        </div>
    }
}


if (IS_COMPONENT) {
    app.model(require("../../model/user").default)
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