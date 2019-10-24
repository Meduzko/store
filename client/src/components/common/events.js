import Event from '../../utils/dispatcher/EventDispatcher';
import { openProduct } from '../../actions/index';
import {connect} from "react-redux";
import store from '../../store/index';

export const openPopup = (e) => {
    let targetData = e.target.dataset.openBtn;
    setTimeout(() => {
        Event.trigger(
            'showPopup',
            {
                'popupName' : targetData,
                popupProps: {
                    popupName: targetData,
                    isOpen: true
                }
            }
        );
    }, 0);
};

export const closePopup = () => {
    setTimeout(() => {
        Event.trigger(
            'hidePopup',
            {
                'popupName' : '',
                popupProps: {
                    popupName: '',
                    isOpen: false
                }
            }
        );
    }, 0);
};

export const openItemInPopup = (e) => {
    let targetDataId = e.currentTarget.dataset.id;
    let targetDataIsOpen = e.currentTarget.dataset.open;
    let booleanIsOpen = Boolean(targetDataIsOpen);

    let target = e.currentTarget;
    store.dispatch(openProduct({ type: 'OPEN_PRODUCT', targetDataId }));
    console.log(targetDataId);
    setTimeout(() => {
        Event.trigger(
            'showItemInPopup',
            {
                'popupName' : 'GalleryItemPopup',
                itemProps: {
                    popupName: 'GalleryItemPopup',
                    itemId: targetDataId ,
                    isOpen: true,
                    target: target
                }
            }
        );
    }, 0);
};
