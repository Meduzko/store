import EventDispatcherInstance from '../EventDispatcher';

const showPopup = EventDispatcherInstance.on('showPopup', e => {
    var popupContainer = document.querySelector('' + e.detail.popupClassName);
    popupContainer.classList.add('show');
    console.log(e.type, e.detail, e.detail.popupClassName);
});

export default showPopup;
