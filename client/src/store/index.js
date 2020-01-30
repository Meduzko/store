import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from "../reducers/product.reducer";
import { userReducer } from "../reducers/user.reducer";
import { rootReducer } from "../reducers/root.reducer";

const middleware = [thunk];


const reducer = combineReducers({
    productState: productsReducer,
    userState: userReducer,
    appState: rootReducer
});


const store = createStore(
    reducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));


export default store;