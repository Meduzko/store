export const initialState = {
    isAuthenticated: false
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_APP_STATE':
            return {
                ...state,
                isProductsLoad: !state.isProductsLoad,
            };
        case 'GET_ERRORS':
            return {
                ...state,
                loginErrors: action.payload
            };
        default:
            return state;
    }
}