import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        // Элемент портала добавляется в DOM-дерево после того, как
        // потомки компонента Modal будут смонтированы, это значит,
        // что потомки будут монтироваться на неприсоединённом DOM-узле.
        // Если дочерний компонент должен быть присоединён к DOM-дереву
        // сразу при подключении, например, для замеров DOM-узла,
        // или вызова в потомке 'autoFocus', добавьте в компонент Modal
        // состояние и рендерите потомков только тогда, когда
        // компонент Modal уже вставлен в DOM-дерево.
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}