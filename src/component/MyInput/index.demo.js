import React from 'react'
import dva from 'dva';
import {routerRedux} from 'dva/router';
import {setHistory} from '../../util/uitls'
import "../../style/index.less"
import {trampToDate} from "../../util/date";
import Button from "../button";
import NumberInput from "./index";
import WingBlank from "../wingBlank";
import UpdownBlank from "../updownBlank";
import {exp_email, exp_length6, exp_not_null} from "../../util/regs";

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
            <h1>基本</h1>
            {/*            * bankCard
            * phone
            * password
            * number
            * money
            * */}
            <UpdownBlank>
                <WingBlank>
                    <UpdownBlank>
                        金钱：
                        <NumberInput type={"money"}></NumberInput>
                    </UpdownBlank>
                    <UpdownBlank>
                        整数：
                        <NumberInput type={"number"}></NumberInput>
                    </UpdownBlank>
                    <UpdownBlank>
                        text:
                        <NumberInput type={"text"}></NumberInput>
                    </UpdownBlank>
                    <UpdownBlank>
                        bankCard：
                        <NumberInput type={"bankCard"}></NumberInput>
                    </UpdownBlank>
                    <UpdownBlank>
                        phone：
                        <NumberInput type={"phone"}></NumberInput>
                    </UpdownBlank>
                    <UpdownBlank>
                        password：
                        <NumberInput type={"password"}></NumberInput>
                    </UpdownBlank>
                </WingBlank>
                <h1>验证</h1>
                <WingBlank>
                    <UpdownBlank>
                        text(exp_length6,exp_not_null)
                        <NumberInput type={"text"} exps={[{
                            exp: exp_length6,
                            message: "长度不能小于6",
                        }, {
                            exp: exp_not_null,
                            message: "不能为空"
                        }]}></NumberInput>
                    </UpdownBlank>
                    <UpdownBlank>
                        email(exp_email)
                        <NumberInput type={"text"} exps={[{
                            exp: exp_email,
                            message: "不是邮箱",
                        }, {
                            exp: exp_not_null,
                            message: "不能为空"
                        }]}></NumberInput>
                    </UpdownBlank>
                </WingBlank>
            </UpdownBlank>
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