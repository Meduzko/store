import React from 'react';
import ProductModal from '../popup/ProductModal';
import { connect } from "react-redux";
import {getProducts, loadProducts, login} from "../../actions";
import Overlay from '../overlay/Overlay';

class PopupContainer extends React.Component {
    render() {
        let openedProduct = this.props.productState.currentOpenedProduct;

        return (
            <div className={'fn-popup-container'}>
                <ProductModal product={openedProduct}/>
                {/*{ openedProduct ? <Overlay /> : '' }*/}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    productState: state.productState,
    userModel: state.userState,
    itemID: state.itemID,
    appState: state.appState
});

// export default connect(mapStateToProps, {getProducts})(Content);
export default connect(mapStateToProps)(PopupContainer);