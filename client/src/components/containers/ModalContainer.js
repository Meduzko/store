import React from 'react';
import ProductModal from '../product-modal/ProductModal';
import { connect } from 'react-redux';
import { openProductModal, hideProductModal, closeProductModal, addToBasket } from '../../actions/index';
import Overlay from '../overlay/Overlay';

class ModalContainer extends React.Component {
    componentDidMount = () => {
        console.log('Modal Container is Mount');
    };

    componentWillUnmount = () => {
        console.log('Modal Container is Unmount');
    };

    render() {
        const { currentOpenedProduct, isOpen } = this.props.modalState;

        return (
            <div className={'modal-container'}>
                { currentOpenedProduct
                    ?  <ProductModal {...this.props.modalState}
                           onHide={ this.props.hideProductModal }
                           onClose={ this.props.closeProductModal }
                           addToBasket={ this.props.addToBasket }/>
                    :  null }

                { isOpen ? <Overlay onHide={this.props.hideProductModal} /> : null }
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
    { openProductModal, hideProductModal, closeProductModal, addToBasket })
(ModalContainer);