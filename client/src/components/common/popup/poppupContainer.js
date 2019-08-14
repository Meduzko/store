import React, { Component } from 'react';
import RegisterPopup from '../../register/register-popup';
import LoginPopup from '../../login/login-popup';
import Event from '../../../utils/dispatcher/EventDispatcher';
import Overlay from '../popup/overlay';
import { closePopup, openPopup } from '../../common/events';
import ItemPopup from '../../item/itemPopup';


export default class PopupContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            popupName: '',
            itemPopup: ''
        };
    }

    componentDidMount() {
        this.subscribe();
    }

    popupsMapper = () => {
        let popupName = this.state.popupName;

        switch (popupName) {
            case 'LoginPopup':
                this.setState(state => ({ popupName: <LoginPopup isOpen={ this.state.isOpen } popupName={ this.state.popupName } /> }));
                break;
            case 'RegisterPopup':
                this.setState(state => ({ popupName: <RegisterPopup isOpen={ this.state.isOpen } popupName={ this.state.popupName } /> }));
                break;
            case 'showItemInPopup':
                this.setState(state => ({ popupName: <ItemPopup /> }));
                break;
            default:
                console.log('Without popup');
        }
    }

    subscribe = () => {
        Event.on('showPopup', e => {
            //   console.log(e.type, e.detail, e.detail.popupName);
            let details = e.detail;
           // console.log(details);
            this.setState(state => ({
                isOpen: !state.isOpen,
                popupName: details.popupName,
                enableOverlay: true
            }));

            this.popupsMapper();
        });

        Event.on('showItemInPopup', (e) => {
            //   console.log(e.type, e.detail, e.detail.popupName);
            let details = e.detail;

            this.setState(state => ({
                isOpen: !state.isOpen,
                popupName: 'showItemInPopup',
                itemPopup: details.itemProps.target,
                enableOverlay: true
            }));

           let cloneNode = details.itemProps.target.cloneNode(true);

            this.popupsMapper();

            document.querySelector('.popup-item').appendChild(cloneNode);
        });

        Event.on('hidePopup', () => {
            this.setState(state => ({
                isOpen: !state.isOpen,
                popupName: '',
                enableOverlay: false
            }));

            this.popupsMapper();
        });
    }

    render() {
        return (
            <div className={'fn-popup-container'}>
                {/*{this.state.isOpen ? this.state.popupName : ''}*/}
                { this.state.isOpen ? this.state.popupName : '' }
                { this.state.isOpen ? <Overlay className={'overlay'} closePopup={ closePopup } /> : ''}
            </div>
        )
    }
};
