import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from '../item/item';
import { getProducts, loadProducts, login, openProduct } from '../../actions/index';
import PlaceholderService from '../../services/placeholderService';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: '',
            isLogged: this.props.userModel.isLogged,
            isProductsLoaded: false,
            selectedEl: null
        };

        console.log(this.props);
    }

    componentWillMount = () => {
        PlaceholderService.getDefaultPlaceholder()
            .then((result) => {
                console.log(result);
                this.setState({
                    ...this.state,
                    products: result,
                    isProductsLoaded: !this.state.isProductsLoaded
                });

                this.props.loadProducts({type: 'LOAD_PRODUCTS', data: result});
            });
    };

    componentWillUnmount = () => {

    };

    _getProducts = () => {
        console.log('Another console');
    };

    selectItem = e => {
        let item = e.currentTarget.parentElement;

        let id = parseInt(item.getAttribute('data-id'));
        let product = this.state.products.filter(el => el.id === id);

        this.setState({
            ...this.state,
            selectedEl: product[0]
        });

       this.props.openProduct({type: 'HANDLE_OPENING', data: product[0]});

       console.log(product[0]);
    };

    render() {
        const { isProductsLoaded, products } = this.state;
        let items;

        if (products) {
            items = products.map((item, i) => <Item key={item.id} selectItem={this.selectItem} id={item.id} image={item.thumbnailUrl} props={this.props}/>);
        }

        return (
            <div className='todo-list'>
                { isProductsLoaded ? items : <p>Loading...</p> }
            </div>
        )
    }

}

Content.propTypes = {
    // getProducts: PropTypes.func.isRequired,
    // products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    productState: state.productState,
    userModel: state.userState,
    itemID: state.itemID,
    appState: state.appState
});

// export default connect(mapStateToProps, {getProducts})(Content);
export default connect(
    mapStateToProps,
    { login, getProducts, loadProducts, openProduct }
)(Content);