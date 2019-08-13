import React from 'react';
import Event from '../../utils/dispatcher/EventDispatcher';


export default class Header extends React.Component {

    openPopup = (e) => {
        let targetData = e.target.dataset.openBtn;
        setTimeout(() => {
            Event.trigger('showPopup', { 'popupName' : targetData, popupProps: { popupName: targetData, isOpen: true }  });
        }, 0);
    }

    render() {
        return (
            <div>
                <ul>
                    <li><a href={"/"}>Home</a></li>
                    <li><a href={"/content"}>Content</a></li>
                    <li><div className={'fn-popup register-popup'} data-open-btn={'LoginPopup'} onClick={this.openPopup}>Login</div></li>
                    <li><div className={'fn-popup login-popup'} data-open-btn={'RegisterPopup'} onClick={this.openPopup}>Register</div></li>
                </ul>
            </div>
        )
    }
}