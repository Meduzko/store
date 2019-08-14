import React, { Component } from 'react';
import { closePopup } from '../common/events';

export default class RegisterPopup extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className={'loginPopup common-popup'} data-popup-type={'registration-popup'}>
                <div className={'loginPopup__form-container'}>
                    <h1 className={'form__title'}>Register</h1>
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
