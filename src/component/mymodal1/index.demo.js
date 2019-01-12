import React from 'react'
import dva from 'dva';
import {routerRedux} from 'dva/router';
import {getWidth, MyMap, setHistory, uuid} from '../../util/uitls'
import "../../style/index.less"

import MyModal from "./index.js";
import {BottomModal} from "./bottomModal";
import Button from "../button";
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
            visiable1: false,
            visiable2: false,
            visiable3: false,
        }
    }

    render() {
        var self = this
        return <UpdownBlank>
            <WingBlank>
                {/*=========commont */}
                <Button
                    type={"block"}
                    onClick={() => {
                        self.setState({
                            visiable1: !this.state.visiable1
                        })
                    }}
                >
                    普通的modal
                </Button>
                <MyModal visiable={this.state.visiable1}
                         width={250}
                         onClose={() => {
                             self.setState({
                                 visiable1: !this.state.visiable1
                             })
                         }}
                >
                    普通的modal
                </MyModal>
                <br/>

                {/*=========bottom的modal */}
                <Button
                    type={"block"}
                    onClick={() => {
                        self.setState({
                            visiable2: !this.state.visiable2
                        })
                    }}
                >
                    bottom的modal
                </Button>
                <BottomModal
                    footer={false}
                    visiable={this.state.visiable2}
                    width={getWidth()}
                    onClose={() => {
                        self.setState({
                            visiable2: !this.state.visiable2
                        })
                    }}
                >
                    bottom
                </BottomModal>
                <br/>

            </WingBlank>
        </UpdownBlank>
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