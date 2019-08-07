import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


export default class Header extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href={"/"}>Home</a></li>
                    <li><a href={"/content"}>Content</a></li>
                </ul>
            </div>
        )
    }
}