import React from 'react';

import {routerRedux} from 'dva/router';

import {setHistory} from "../util/uitls";

import {Route, Switch} from "react-router-dom";
import Loading from "../component/Loading";
import Loadable from 'react-loadable';

const Home = Loadable({
    loader: () => import('../page/Home/index.js'),
    loading: Loading
});
const ComponentShow = Loadable({
    loader: () => import('../page/ComponentShow/index.js'),
    loading: Loading
});
const TestPacking = Loadable({
    loader: () => import('../page/TestPacking/index.js'),
    loading: Loading
});


const {ConnectedRouter} = routerRedux;


export default ({history, app}) => {

    return (<ConnectedRouter history={history}>

            <Switch>
                {
                    setHistory(history)
                }
                <Route exact path="/" component={Home}/>
                <Route exact path="/Home" component={Home}/>
                <Route path="/component" component={ComponentShow}/>
                <Route path="/test" component={TestPacking}/>
            </Switch>
        </ConnectedRouter>
    );
}

