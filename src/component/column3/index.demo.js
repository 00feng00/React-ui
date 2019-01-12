import React from 'react'
import dva from 'dva';
import App from './index.js'
import {routerRedux} from 'dva/router';
import {setHistory} from '../../util/uitls'
import "../../style/index.less"


function ImageItem(props) {
    return <div style={{padding: 10}}>
        <img src={props.image} alt=""
             style={{maxHeight: "100%", maxWidth: "100%"}}/>
    </div>
}

function Demo() {
    return <div>
        <App
            leftSpan={2}
            centerSpan={5}
            rightSpan={2}
        >
            <ImageItem image={"https://qn.diyeetech.com/20181026-151115-c2936347.jpg?imageView2/2/w/200"}></ImageItem>
            <ImageItem image={"https://qn.diyeetech.com/20181126-171039-856eff88.jpg?imageView2/2/w/200"}></ImageItem>
            <ImageItem image={"https://qn.diyeetech.com/20181112-190301-c0205651.jpg?imageView2/2/w/200"}></ImageItem>
        </App>
        <App
            leftSpan={3}
            centerSpan={3}
            rightSpan={3}
        >
            <ImageItem image={"https://qn.diyeetech.com/20181026-151115-c2936347.jpg?imageView2/2/w/200"}></ImageItem>
            <ImageItem image={"https://qn.diyeetech.com/20181126-171039-856eff88.jpg?imageView2/2/w/200"}></ImageItem>
            <ImageItem image={"https://qn.diyeetech.com/20181112-190301-c0205651.jpg?imageView2/2/w/200"}></ImageItem>
        </App>
        <App
            leftSpan={1}
            centerSpan={5}
            rightSpan={3}
        >
            <ImageItem image={"https://qn.diyeetech.com/20181026-151115-c2936347.jpg?imageView2/2/w/200"}></ImageItem>
            <ImageItem image={"https://qn.diyeetech.com/20181126-171039-856eff88.jpg?imageView2/2/w/200"}></ImageItem>
            <ImageItem image={"https://qn.diyeetech.com/20181112-190301-c0205651.jpg?imageView2/2/w/200"}></ImageItem>
        </App>
    </div>
}

/*const {ConnectedRouter} = routerRedux;
var app = null;
app = dva({
    onError(error) {
        // message.destroy();
        // message.error(error.message);
        console.error(error.message)
    },
});

app.model(require("../../model/user").default)
app.router(({history}) => {
    {
        setHistory(history)
    }
    return <ConnectedRouter history={history}>

    </ConnectedRouter>
})


app.start("#root");*/

export default Demo