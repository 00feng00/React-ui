import "./style/index.less"
import dva from 'dva';
import React from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import routes from './route/index'
import {createBrowserHistory as createHistory} from 'history';

moment.locale('zh-cn');


var app = null;

app = dva({
    history: createHistory(),
    onError(error) {
        console.error(error.message)
    },
});
app.model(require('./model/app').default);
app.router(routes);

app.start("#root");

if (module.hot) {
    app.start("#root");
    module.hot.accept();
} else {
    throw new Error("[HMR] Hot Module Replacement is disabled.");
}


/*提示配置*/
window.cc = (value) => {
    if (value instanceof HTMLElement) {
        /*如果是图片，在浏览器显示*/
        if (value.nodeName.toLowerCase() === 'img') {
            console.log("%c", `padding:${value.width}px ${value.height}px;line-height:${value.height}px;background:url('${value.src}') no-repeat;`);
        } else {
            console.log(JSON.stringify(value, null, 2));
        }

    } else {
        console.log(JSON.stringify(value, null, 2));
    }
};
export default app;