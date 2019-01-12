import React from 'react';
import ReactDOM from 'react-dom'
import { getHistory } from "../util/uitls";
import { connect } from 'react-redux';
import { setStoreUtil, getStoreUtil, initStoreFromLocal } from '../util/store'
export default function (WrappedComponent) {
    class MyComponent extends React.Component {
        constructor(props) {
            super()
            initStoreFromLocal.call(props)
            this.getStore = getStoreUtil.bind(props)
            this.setStore = setStoreUtil.bind(props)
        }

        componentWillMount() {
            var self = this
        }

        render() {
            return (<WrappedComponent {...this.props} getStore={this.getStore} setStore={this.setStore} />)
        }
    }

    var HelloWorld = connect(function (state, myProps) {
        return { _store: state, store: state, ...myProps }
    }, function (dispatch, ownProps) {
        return {
            dispatch,
        }
    })(MyComponent)


    return HelloWorld
}