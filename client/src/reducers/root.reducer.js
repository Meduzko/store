export const initialState = {
    isAuthenticated: false
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_AUTHENTICATED':
            return {
                ...state,
                isAuthenticated: !state.isAuthenticated
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