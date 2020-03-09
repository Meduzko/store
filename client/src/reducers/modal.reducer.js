const initialState = {
    isOpen: false,
    currentOpenedProduct: ''
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                currentOpenedProduct: action.payload,
                isOpen: true
            };
        case 'HIDE_MODAL':
            return {
                ...state,
                isOpen: !state.isOpen
            };
        case 'GET_ERRORS':
            return {
                ...state,
                loginErrors: action.payload
            };
        default:
            return state;
    }
};