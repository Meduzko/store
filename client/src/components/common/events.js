import Event from '../../utils/dispatcher/EventDispatcher';

export const openPopup = (e) => {
    let targetData = e.target.dataset.openBtn;
    setTimeout(() => {
        Event.trigger('showPopup', { 'popupName' : targetData, popupProps: { popupName: targetData, isOpen: true }  });
    }, 0);
};

export const closePopup = (e) => {
    let targetData = e.target.dataset.openBtn;
    setTimeout(() => {
        Event.trigger('hidePopup', { 'popupName' : targetData, popupProps: { popupName: targetData, isOpen: false }  });
    }, 0);
};