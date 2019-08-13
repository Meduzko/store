import React, { Component } from 'react';

export default class LoginPopup extends Component {
    constructor (props) {
        super();
    }

    render() {
        return (
            <div className={"loginPopup"} data-popup-type={'login-popup'}>
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
};