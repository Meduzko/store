export const initialState = {
    isLogged: false,
    userModel: ''
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                userModel: action.payload,
                isLogged: !state.isLogged
            };
        case 'GET_CURRENT_USER':
            return state.userName;
        case 'GET_ERRORS':
            return {
                ...state,
                loginErrors: action.payload
            };
        default:
            return state;
    }
};