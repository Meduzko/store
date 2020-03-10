import React from 'react';

export class Overlay extends React.Component {
    clickOutside = () => {
        this.props.onHide({type:'HIDE_MODAL'});
    };

    render() {
        return (
            <div className={'overlay'} onClick={this.clickOutside} />
        )
    }
}