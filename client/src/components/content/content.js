import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from '../item/item';
import { getProducts, login } from '../../actions/index';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemID: '123',
            isLogged: this.props.userModel.isLogged,
            isProductsLoaded: false
        };

    //    this.props.getProducts();
    //    this.props.getProductsFn();
        console.log(this.props);
    }

    componentDidMount = () => {
        this.props.getProducts().then((data) => {
            console.log('data was loading ');

            this.setState({
                ...this.state,
                products: this.props.productState.products,
                isProductsLoaded: this.props.productState.isProductsLoaded
            });
        });
        // this.props.getProducts();
    //   const products = this.props.getProducts();

        // console.log(this.props);

        // PlaceholderService.getDefaultPlaceholder()
        //     .then((result) => {
        //         console.log(result);
        //         this.setState({
        //             products: result,
        //             isPageLoading: false
        //         });
        //     });
    };

    _getProducts = () => {
    //   let target = e.currentTarget;
    //     console.log('Item was clicked ', target.dataset.id);
       // this.setState({...this.state, isLogged: !this.state.isLogged })
    //    this.props.login({userName: 'ALSSS', userID: '234'})

        console.log('Another console');

    };

    render() {
        let products;
        console.log(this.props);
        console.log(this.state);
        const isProductsLoad = this.state.isProductsLoaded;

        products = isProductsLoad ? this.state.products : [];

        console.log(products);
     //   const items = products.map(item => <Item key={item.id} opts={item} />);

        try {
            products.map(item => console.log(item));
        } catch (e) {
            console.log(e);
        }

        // items.map(item =>
        //             <Item onClick={ this.handleItemClick } key={item.id} opts={item} />
        //       );
    //    const items = this.state.products.map((item) => <Item onItemClick={ this.handleItemClick } key={item._id} opts={item} props={this.props}/>);
        return (
            <div className='todo-list'>
                <div onClick={ this._getProducts }>Handle products loading, {isProductsLoad} </div>
                {/*{ !isProductsLoad ? <p>Loading...</p> : items}*/}
                {/*<p>Loading...</p>*/}
               {/* <div>{items}</div> */}
            </div>
        )
    }

}
Content.propTypes = {
    // getProducts: PropTypes.func.isRequired,
    // products: PropTypes.array.isRequired,
};

// const mapStateToProps = state => ({
//     items: [],
//     getProductsFn: getProducts
// });

const mapStateToProps = state => ({
    productState: state.productState,
    userModel: state.userState,
    itemID: state.itemID,
    appState: state.appState
});


// export default connect(mapStateToProps, {getProducts})(Content);
export default connect(
    mapStateToProps,
    { login, getProducts }
)(Content);