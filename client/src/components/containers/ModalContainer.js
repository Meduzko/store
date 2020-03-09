import React from 'react';
import ProductModal from '../product-modal/ProductModal';
import { connect } from 'react-redux';
import { openProductModal, hideProductModal } from '../../actions/index';

class ModalContainer extends React.Component {
    render() {
        let openedProduct = this.props.modalState.currentOpenedProduct;
        let isOpened = openedProduct ? true : false;

        return (
            <div className={'modal-container'}>
                <ProductModal {...this.props.modalState} onHide={this.props.hideProductModal} />
                {/*{ openedProduct ? <Overlay /> : '' }*/}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    modalState: state.modalState,
    userModel: state.userState,
    appState: state.appState
});

export default connect(mapStateToProps, 
    {openProductModal, hideProductModal })
(ModalContainer);