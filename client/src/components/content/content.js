import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from '../item/item';
import { getProducts } from '../../actions/index';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemID: ''
        }

    //    this.props.getProducts();
    //    this.props.getProductsFn();
        console.log(this.props);
    }

    componentWillMount = () => {
       this.props.getProducts();
    }

    componentDidMount = () => {
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
    }

    render() {
        console.log(this.props);
        const items = this.props.products || [];
        // items.products.map(item => console.log(item));

        // items.map(item =>
        //             <Item onClick={ this.handleItemClick } key={item.id} opts={item} />
        //       );
    //    const items = this.state.products.map((item) => <Item onItemClick={ this.handleItemClick } key={item._id} opts={item} props={this.props}/>);
        return (
            <div className='todo-list'>
                <div onClick={ this._getProducts }>Handle products loading</div>
                {/*{ this.state.isPageLoading ? <p>Loading...</p> : items }*/}
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
    isLoggined: state.initialState.isLoggined,
    products: state.items
});


// const mapStateToProps = function(state) {
//     return {
//       profile: state.user.profile,
//       loggedIn: state.auth.loggedIn
//     }
//   }

// export default connect(mapStateToProps, {getProducts})(Content);
export default connect(mapStateToProps)(Content);