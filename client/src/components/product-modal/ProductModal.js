import React from 'react';
import DescriptionField from '../../components/common/fields/description-field';
import './productModal.scss';

class ProductModal extends React.Component {
    componentDidMount = () => {
        console.log('Product Modal is Mount');
    };

    hide = () => {
        this.props.onHide({type: 'HIDE_MODAL'});
    };

    close = () => {
        this.props.onClose({type: 'CLOSE_MODAL'});
    };

    componentWillUnmount = () => {
        console.log('Product Modal is Unmount');
    };

    render() {
        const { id, title, url } = this.props.currentOpenedProduct;
        const description = 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ' +
            'ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, ' +
            'with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of ' +
            'squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread ' +
            'group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread ' +
            'group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread ' +
            'group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread ' +
            'group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica .Lizards are a widespread ' +
            'group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica .Lizards are a widespread ' +
            'group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica';

        return (
            <div className={`product-container ${this.props.isOpen ? 'open' : ''}` }>
                <div className={'product-container__close-icon'} onClick={this.close}>X</div>
                <div className={'product-title'}>{title}</div>
                <div className={'product-content'}>
                    <h3> {title} </h3>
                    <div className={'product-content__product-image'}>
                        <img src={url} />
                    </div>

                    <DescriptionField opts={description} />
                </div>
            </div>
        )
    }
}

export default ProductModal;