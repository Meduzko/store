import React from 'react';
import './productModal.scss';

class ProductModal extends React.Component {
    initialize = () => {
       // addEventListener();
    }

    hide = () => {
        this.props.onHide({type: 'HIDE_MODAL'});
    }

    open = () => {

    }

    render() {
        const { id, title, url } = this.props.currentOpenedProduct;

        return (
            <div className={`product-container ${this.props.isOpen ? 'open' : ''}` }>
                <div className={'product-container__close-icon'} onClick={this.hide}>X</div>
                <div className={'product-title'}>{title}</div>
            </div>
        )
    }
}

export default ProductModal;