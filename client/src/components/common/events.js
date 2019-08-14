import Event from '../../utils/dispatcher/EventDispatcher';

export const openPopup = (e) => {
    let targetData = e.target.dataset.openBtn;
    setTimeout(() => {
        Event.trigger('showPopup', { 'popupName' : targetData, popupProps: { popupName: targetData, isOpen: true }  });
    }, 0);
};

export const closePopup = () => {
    setTimeout(() => {
        Event.trigger('hidePopup', { 'popupName' : '', popupProps: { popupName: '', isOpen: false }  });
    }, 0);
};

export const openItemInPopup = (e) => {
    let targetDataId = e.currentTarget.dataset.id;
    let target = e.currentTarget;
    console.log(targetDataId);
    setTimeout(() => {
        Event.trigger('showItemInPopup', { 'popupName' : 'GalleryItemPopup', itemProps: { popupName: 'GalleryItemPopup', itemId: targetDataId , isOpen: true, target: target } });
    }, 0);
};