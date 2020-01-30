import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from '../reducers/rootReducer'


const middleware = [thunk];
const initialState = {
    initialState: {
        isLoggined: false
    }
};

const store = createStore(
    productsReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));


export default store;