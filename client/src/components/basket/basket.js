import React from 'react';
import { connect } from 'react-redux';
import BasketItem from  '../basket-item/basket-item';
import { removeFromBasket, increaseCount, decreaseCount } from '../../actions/index';
import './basket.scss';

class Basket extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        console.log(props);
    }
    componentDidMount = () => {
        console.log('Modal Container is Mount');
    };

    componentWillUnmount = () => {
        console.log('Modal Container is Unmount');
    };

    render() {
        let isProductInBasket = this.props.basketState.products.length > 0;
        const orders = isProductInBasket
            ? this.props.basketState.products.map((item) =>
                <div key={ item.item.id }>
                    <div className={'basket__item'}>
                        <div className={'item item-id'}>ID:{item.item.id}</div>
                        <div className={'item item-title'}>Title: {item.item.title}</div>
                        <div className={'item item-count'}>Count: {item.count}</div>
                        <div className={'item item-price'}>Price: {item.item.price}</div>
                        <button onClick={() => this.props.increaseCount(item)}>Add</button>
                        <button onClick={() => this.props.decreaseCount(item)}>Minus</button>
                    </div>
                    <div className={'btn basket__button remove-btn'} onClick={ () => this.props.removeFromBasket(item)}>Remove item</div>
                    {/*<BasketItem setItemCount={ this.setItemCount }*/}
                    {/* //       removeFromBasket={ this.props.removeFromBasket }*/}
                    {/* //     removeFromBasket={ () => this.props.removeFromBasket(item)}*/}
                    {/*        key={ item.item.id }*/}
                    {/*        props={ item } />*/}
                    {/*        <button onClick={ () => this.props.removeFromBasket(item)}>Remove item</button>*/}
                </div>)
            : <div>Your basket is empty </div>;

        return (
            <div className={'basket'}>
                <div className={'basket__container'}>
                    { orders }
                    { isProductInBasket
                        ? <div>
                            <div className={'basket__total-price'}>Total price: {this.props.basketState.totalPrice}</div>
                            <div className={'basket__make-order'}><a href={'/order-form'}>Order</a></div>
                          </div>
                        : '' }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    modalState: state.modalState,
    userModel: state.userState,
    appState: state.appState,
    basketState: state.basketState
});

function mapDispatchToProps(dispatch) {
    return {
        removeFromBasket: item => dispatch(removeFromBasket({ type: 'REMOVE_ITEM', payload: item })),
        increaseCount: item => dispatch(increaseCount({ type: 'INCREASE_COUNT', payload: item })),
        decreaseCount: item => dispatch(decreaseCount({ type: 'DECREASE_COUNT', payload: item }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);