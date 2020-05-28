import React from 'react';
import { openProductModal, hideProductModal, closeProductModal, addToBasket } from '../../actions/index';

class Overlay extends React.Component {
    clickOutside = () => {
        this.props && this.props.onHide({type:'HIDE_MODAL'});
    };

    render() {
        return (
            <div className={'overlay'} onClick={this.clickOutside} />
        )
    }
}

export default Overlay;