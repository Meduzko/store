const initialState = {
    isProductsLoad: false,
    products: []
};


export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                isProductsLoad: !state.isProductsLoad
            };
        case 'HANDLE_OPENING':
            return {
                ...state,
                openedId: action.id
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