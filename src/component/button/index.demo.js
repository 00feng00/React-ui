import React from 'react'
import dva from 'dva';
import {routerRedux} from 'dva/router';
import {MyMap, setHistory, uuid} from '../../util/uitls'
import "../../style/index.less"
import Button from "./index";
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
            length: 30
        }
    }

    render() {
        var self = this
        return <div>
            <WingBlank>
                <UpdownBlank>
                    <UpdownBlank>
                        <Button>按钮0</Button>
                    </UpdownBlank>
                    <UpdownBlank> <Button color={"red"}>按钮1</Button></UpdownBlank>
                    <UpdownBlank> <Button color={"blue"}>按钮3</Button></UpdownBlank>
                    <UpdownBlank> <Button disabled>按钮0</Button></UpdownBlank>
                    <UpdownBlank> <Button disabled color={"red"}>按钮1</Button></UpdownBlank>
                    <UpdownBlank> <Button disabled color={"blue"}>按钮3</Button></UpdownBlank>
                    <Button isLoading color={"blue"}>按钮3</Button>
                </UpdownBlank>

            </WingBlank>
            <WingBlank>
                <UpdownBlank>
                    <Button type={"block"}>按钮0</Button>
                </UpdownBlank>
                <UpdownBlank>
                    <Button color={"red"} type={"block"}>按钮1</Button>
                </UpdownBlank>
                <UpdownBlank>
                    <Button color={"blue"} type={"block"}>按钮3</Button>
                </UpdownBlank>
                <Button isLoading color={"red"} type={"block"}>按钮3</Button>
            </WingBlank>

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


    app.start("#root");
}


export default Demo
