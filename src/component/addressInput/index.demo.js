import React from 'react'
import dva from 'dva';
import {routerRedux} from 'dva/router';
import {setHistory} from '../../util/uitls'
import "../../style/index.less"
import {trampToDate} from "../../util/date";
import Button from "../button";
import AddressPicker from "./index";
import WingBlank from "../wingBlank";
import UpdownBlank from "../updownBlank";

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
            value: ["黑龙江省", "七台河市", "金沙新区"],
        }
    }

    render() {
        return <div>
            <WingBlank>
                地址选择：
                <UpdownBlank>
                    <AddressPicker
                        onChange={e => {
                            this.setState({value: e})
                        }}
                        value={this.state.value}
                    >
                        {this.state.value.toString()}
                    </AddressPicker>
                </UpdownBlank>
            </WingBlank>

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