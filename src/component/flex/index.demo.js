import React from 'react'
import dva from 'dva';
import Flex from './index.js'
import {routerRedux} from 'dva/router';
import {MyMap, setHistory, uuid} from '../../util/uitls'
import "../../style/index.less"
import {r_array_length} from "../../util/lodash";
import UpdownBlank from "../updownBlank";
import WingBlank from "../wingBlank";

const {ConnectedRouter} = routerRedux;
var app = null;
app = dva({
    onError(error) {
        // message.destroy();
        // message.error(error.message);
        console.error(error.message)
    },
});

export class Demo extends React.Component {
    constructor() {
        super()
        this.state = {
            length: 30
        }
    }

    render() {
        var self = this
        return <div>
            <UpdownBlank>
                <Flex>
                    <Flex.Item>
                        <div style={{background: "#e0e0e0", height: 100, border: "1px solid #eee"}}>1</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{background: "#e0e0e0", height: 100, border: "1px solid #eee"}}>1</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{background: "#e0e0e0", height: 100, border: "1px solid #eee"}}>1</div>
                    </Flex.Item>
                </Flex>
            </UpdownBlank>
            <UpdownBlank>
                <Flex>
                    <Flex.Item span={1}>
                        <div style={{background: "#e0e0e0", height: 100, border: "1px solid #eee"}}>1</div>
                    </Flex.Item>
                    <Flex.Item span={3}>
                        <div style={{background: "#e0e0e0", height: 100, border: "1px solid #eee"}}>3</div>
                    </Flex.Item>
                    <Flex.Item span={1}>
                        <div style={{background: "#e0e0e0", height: 100, border: "1px solid #eee"}}>1</div>
                    </Flex.Item>
                </Flex>
            </UpdownBlank>

        </div>
    }
}


if (IS_COMPONENT) {
    app.router(({history}) => {
        {
            setHistory(history)
        }
        return <ConnectedRouter history={history}>
            <Demo/>
        </ConnectedRouter>
    })


    app.start("#root");
}


export default Demo