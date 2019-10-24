import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import initStore from '../reducers/index';

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
    initStore,
    {
        articles: [{article: 'My default pre-render article', id: 0}],
        users: [{userName: 'Test', password: 123}]
    },
    allStoreEnhancers
);


export default store;