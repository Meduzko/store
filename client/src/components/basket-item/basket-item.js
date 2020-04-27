import React from 'react';

const BasketItem = (props) => {
 //   const removeItem = props.removeFromBasket.bind(this, props.props.item);
  //  const setItemCount = props.setItemCount.bind(this, props.props.item);

    return (
        <div className={'basket__item'}>
            <div className={'item item-id'}>ID:{props.props.item.id}</div>
            <div className={'item item-title'}>Title: {props.props.item.title}</div>
            <div className={'item item-count'}>Count: {props.props.count}</div>
            <button>Add</button> <button>Minus</button>
            {/*<div className={'btn basket__button remove-btn'} onClick={props.removeFromBasket}>Remove item</div>*/}
        </div>
    )
};

export default BasketItem;
