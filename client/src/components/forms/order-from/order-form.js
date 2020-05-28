import React, { Component } from 'react';
import Overlay from '../../overlay/Overlay';

class Order extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={'order'}>
                <Overlay />
                <div>Order form here</div>
            </div>
        )
    }
}

export default Order;