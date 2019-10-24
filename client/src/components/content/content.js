import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from '../item/item';
import Event from '../../utils/dispatcher/EventDispatcher';
import {addArticle, addProducts, handleOpening, openProduct} from '../../actions/index';
import ProductService from '../../services/productService';
import PlaceholderService from '../../services/placeholderService';
import store from '../../store/index';
import { productsReducer } from '../../reducers';
import { openItemInPopup } from '../common/events';
import CardActionArea from "@material-ui/core/CardActionArea";


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isPageLoading: true
        };
    }

    componentDidMount = () => {
        // ProductService.getDefaultProducts()
        //     .then((result) => {
        //         console.log(result);
        //         this.setState({
        //             products: result,
        //             isPageLoading: false
        //         });
        //
        //     //    this.props.onAddProducts({ type: 'ADD_PRODUCTS', result });
        // });

        PlaceholderService.getDefaultPlaceholder()
            .then((result) => {
                console.log(result);
                this.setState({
                    products: result,
                    isPageLoading: false
                });
            });
    };

    handleItemClick = (itemId) => {
        console.log('Item was clicked ', itemId);
    };
    // handleChange(id) {
    //     this.setState(prevState => {
    //         const updatedTodos = prevState.todos.map(todo => {
    //             if (todo.id === id) {
    //                 todo.completed = !todo.completed
    //             }
    //             return todo
    //         });
    //         return {
    //             todos: updatedTodos
    //         }
    //     })
    // }

    render() {
      //  const images = this.state.images.map(image => <Image key={image.id} image={image} />);
        //const items = this.props.products.map((item) => <Item key={item._id} opts={item} rootProps={this.props}/>);
        console.log(this.props);
        console.log(this.props.products);

          const items = this.state.products.map((item) =>
                    <Item onItemClick={ this.handleItemClick } key={item.id} opts={item} props={this.props}/>
              );
    //    const items = this.state.products.map((item) => <Item onItemClick={ this.handleItemClick } key={item._id} opts={item} props={this.props}/>);
        return (
            <div className='todo-list'>
                { this.state.isPageLoading ? <p>Loading...</p> : items }
                {/*<p>Loading...</p>*/}
            </div>
        )
    }


}
const mapStateToProps = state => ({
    articles: state.articles,
    users: state.users,
    products: state.products,
    checkedID: state.checkedID,
});

const mapActionsToProps = {
    onAddArticle: addArticle,
    onAddProducts: addProducts,
    handleOpening: handleOpening
};

// const mapDispatchToProps = dispatch => {
//     return {
//         handleOpening: bindActionCreators(handleOpening, dispatch)
//     }
// };

export default connect(mapStateToProps, mapActionsToProps)(Content);