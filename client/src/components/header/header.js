import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import popupDispatcher from '../../utils/dispatcher/popupDispatcher/popupDispatcher';

export default class Header extends React.Component {

    constructor() {
        super();
        this.openPopupBtn = document.querySelector('.fn-popup');
        this.openPopupBtn.addEventListener('click', () => { this.openPopup() }, false);
    }

    openPopup = () => {
        setTimeout(() => {
            popupDispatcher.trigger('showPopup', {'popupName' : 'loginPopup' });
        }, 1000);
    }

    render() {
        return (
            <div>
                <ul>
                    <li><a href={"/"}>Home</a></li>
                    <li><a href={"/content"}>Content</a></li>
                    <li><div className={'fn-popup register-popup'}>Register</div></li>
                </ul>
            </div>
        )
    }
}