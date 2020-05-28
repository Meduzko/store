import PlaceholderService from '../services/placeholderService';

export const setAppState = payload => dispatch => {
    dispatch({
        type: payload.type
    });
};

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

export const loadProducts = payload => dispatch => {
    dispatch({
        type: payload.type,
        payload: payload.data
    })
};

// Login actions
export const login = payload => dispatch => {
    dispatch({
        type: payload.type,
        payload: payload.payload
    });
};

export const addProducts = (payload) => {
    return {
        type: 'ADD_PRODUCTS',
        payload
    }
};

// Product modal
export const openProductModal = payload => dispatch => {
    dispatch({
        type: payload.type,
        payload: payload.data
    })
};

export const closeProductModal = payload => dispatch => {
    dispatch({
        type: payload.type
    })
};

export const hideProductModal = payload => dispatch => {
    dispatch({
        type: payload.type
    })
};

export const handleOpening = (id) => {
    return {
        type: 'HANDLE_OPENING',
        id
    }
};

// Basket component
export const addToBasket = payload => dispatch => {
    dispatch({
        type: payload.type,
        payload: payload.product
    })
};

export const removeFromBasket = payload => dispatch => {
    dispatch({
        type: payload.type,
        payload: payload.payload
    })
};

export const increaseCount = payload => dispatch => {
    dispatch({
        type: payload.type,
        payload: payload.payload
    })
};

export const decreaseCount = payload => dispatch => {
    dispatch({
        type: payload.type,
        payload: payload.payload
    })
};

