import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


export default class Popup extends React.Component {
    render() {
        return (
            <div className={"loginPopup"}>
                <div className={"loginPopup__title"}></div>
                <div className={"loginPopup__form-container"}>
                    <h1 className={"form__title"}>Login</h1>
                    <div>Name</div>
                    <div>Pass</div>
                    <div>
                        <button>Send!</button>
                    </div>
                </div>
            </div>
        )
    }
}