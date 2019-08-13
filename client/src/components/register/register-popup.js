import React, { Component } from 'react';

export default class RegisterPopup extends Component {
    constructor (props) {
        super();
    }

    render() {
        return (
            <div className={'loginPopup'} data-popup-type={'registration-popup'}>
                <div className={'loginPopup__form-container'}>
                    <h1 className={'form__title'}>Register</h1>
                    <div>Name</div>
                    <div>Pass</div>
                    <div>
                        <button>Send!</button>
                    </div>
                </div>
            </div>
        )
    }
};
