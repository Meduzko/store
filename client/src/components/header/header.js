import React from 'react';
import { openPopup } from '../common/events';


export default class Header extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href={"/"}>Home</a></li>
                    <li><a href={"/content"}>Content</a></li>
                    <li><div className={'fn-popup register-popup'} data-open-btn={'LoginPopup'} onClick={ openPopup }>Login</div></li>
                    <li><div className={'fn-popup login-popup'} data-open-btn={'RegisterPopup'} onClick={ openPopup }>Register</div></li>
                </ul>
            </div>
        )
    }
}