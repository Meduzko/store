import { createStore } from 'redux';
//import rootReducer from '../reducers/index';
// const store = createStore(rootReducer);

import initStore from '../reducers/index';
const store = createStore(
    initStore, {
        articles: [{article: 'My default pre-render article', id: 0}],
        users: [{userName: 'Test', password: 123}]
    },
    window.devToolsExtension && window.devToolsExtension()
);


export default store;