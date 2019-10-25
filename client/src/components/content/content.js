import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from '../item/item';
import { getProducts } from '../../actions/index';



class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount = () => {
        this.props.getProducts();
    };

    // componentDidMount = () => {
    //
    //     PlaceholderService.getDefaultPlaceholder()
    //         .then((result) => {
    //             console.log(result);
    //             this.setState({
    //                 products: result,
    //                 isPageLoading: false
    //             });
    //         });
    // };

    handleItemClick = (itemId) => {
        console.log('Item was clicked ', itemId);
    };

    render() {
        console.log(this.props);
        console.log(this.props.products);

        // items.products.map(item => console.log(item));

          const items = this.props.products.map(item =>
                    <Item key={item.id} opts={item} props={this.props}/>
              );
    //    const items = this.state.products.map((item) => <Item onItemClick={ this.handleItemClick } key={item._id} opts={item} props={this.props}/>);
        return (
            <div className='todo-list'>
                {/*{ this.state.isPageLoading ? <p>Loading...</p> : items }*/}
                {/*<p>Loading...</p>*/}
               <div>{items}</div>
            </div>
        )
    }

}
Content.propTypes = {
    getProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    products: state.productsRoot.products
});

export default connect(mapStateToProps, { getProducts })(Content);