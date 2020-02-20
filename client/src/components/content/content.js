import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from '../item/item';
import { getProducts, loadProducts, login } from '../../actions/index';
import PlaceholderService from '../../services/placeholderService';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: '',
            isLogged: this.props.userModel.isLogged,
            isProductsLoaded: false
        };
        
        console.log(this.props);
    }

    componentDidMount = () => {
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

    _getProducts = () => {
        console.log('Another console');
    };

    render() {
        const { isProductsLoaded, products } = this.state;
        let items;

        if (products) {
            items = products.map((item, i) => <Item key={item.id} image={item.thumbnailUrl}/>);
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
    { login, getProducts, loadProducts }
)(Content);