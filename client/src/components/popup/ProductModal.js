import React from 'react';
import { connect } from 'react-redux';


class ProductModal extends React.Component {
    render() {
        const { id, title, url } = this.props.product;

        return (
            <div className={'product-container'}>
                <div className={'product-title'}>{title}</div>
            </div>
        )
    }
}

export default ProductModal;