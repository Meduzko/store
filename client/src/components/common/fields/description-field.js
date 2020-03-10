import React from 'react';
import { ShowMoreWidget } from '../../../widgets/show-more.widget';

class DescriptionField extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        const el = document.querySelector('.product-content__product-description');

        // Attach widget
        new ShowMoreWidget(el, {
            descriptionText: this.props.opts,
            isToggled: true,
            maxAllowedTextLength: 100
        });
    };

    render() {
        return (
            <div className={'product-content__product-description'}>
                {this.props.opts}
            </div>
        )
    }
}

export default DescriptionField;