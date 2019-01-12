import React from 'react';
import Spin from './spin/index.js'



export default function Loading(props) {
    if (props.isLoading) {
        if (props.timedOut) {
            return <div>Loader timed out!</div>;
        } else if (props.pastDelay) {
            return <div
                style={{
                    width: '100%', height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            ><Spin size="large"
                   spinning="true"
                   style={{margin: 10}}/>Loading...</div>;
        } else {
            return null;
        }
    } else if (props.error) {
        return <div>Error! Component failed to load</div>;
    } else {
        return null;
    }
}