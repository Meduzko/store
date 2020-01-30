import PlaceholderService from '../services/placeholderService';

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const data = await PlaceholderService.getDefaultPlaceholder();
            dispatch({
                type: 'GET_PRODUCTS',
                payload: data
            });
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
};

export const login = payload => dispatch => {
    dispatch({
        type: 'SET_CURRENT_USER',
        payload: payload
    });
};

export const addProducts = (payload) => {
    return {
        type: 'ADD_PRODUCTS',
        payload
    }
};

export const openProduct = (payload, id) => {
    return {
        type: 'OPEN_PRODUCT',
        payload,
        id
    }
};

export const handleOpening = (id) => {
    return {
        type: 'HANDLE_OPENING',
        id
    }
};
