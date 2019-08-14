import React, { Component } from 'react';
import { closePopup } from '../common/events';

export default class LoginPopup extends Component {
    render() {
        return (
            <div className={'loginPopup common-popup'} data-popup-type={'login-popup'}>
                <div className={'loginPopup__form-container'}>
                    <h1 className={'form__title'}>Login</h1>
                    <div>Name</div>
                    <div>Pass</div>
                    <div>
                        <button>Send!</button>
                    </div>
                    <div className={'fn-popup-close popup-close-btn'} onClick={ closePopup }>X</div>
                </div>
            </div>
        )
    }
};