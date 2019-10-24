import { combineReducers } from 'redux';
import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
    users: {},
    articles: {},
    products: [],
    checkedID: {},
    cards: {
        isOpen: false,

    },
};

// function rootReducer(state = initialState, action) {
//     if (action.type === ADD_ARTICLE) {
//         return Object.assign({}, state, {
//             articles: state.articles.concat(action.payload)
//         });
//     }
//     return state;
// }
// export const todos = (currentState = [], action) => {
//     switch(action.type){
//         case 'ADD_TODO':
//             const nextState = [
//                 ...currentState,
//                 {
//                     id: action.id,
//                     task: action.task,
//                     completed: false
//                 }
//             ];
//             return nextState;
//             break;
//         default:
//             return currentState;
//     }
// };


// const todoApp = (currentState = {}, action) => {
//     return {
//         todos: todos(currentState.todos, action)
//     }
// };
//
// export default todoApp;
// import { combineReducers } from 'redux';
// import App from '../App.reducer';
//
// export default combineReducers({
//     App
// });
//

// export default function(state = initialState, action) {
//     switch (action.type) {
//         case ADD_ARTICLE:
//             return {
//                 ...state,
//                 articles: action.payload
//             };
//         case 'GET_ERRORS':
//             return {
//                 ...state,
//                 loginErrors: action.payload
//             };
//         default:
//             return state;
//     }
// }

// const chosenItem = (state, id) => {
//     const selectedItem = state.products ? state.products.result : {};
//     let currentItem;
//
//     selectedItem.map((item) => {
//         if (item._id === id) {
//             currentItem = item;
//         }
//         return currentItem = item;
//     });
//
//     return currentItem;
// };

export const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                ...state,
                articles: action.payload
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

export const usersReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: action.payload
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

export const productsReducer = (state = initialState.checkedID, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        case 'OPEN_PRODUCT':
            const { targetDataId } = action.payload;

            return {
                ...state,
                id: targetDataId
                // ...state.products,
                // isChecked: isChecked,
                // chosenItem: chosenItem(state, id)
              //  ...state,
             //   Object.assign({}, targetDataId)
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

export default combineReducers({
    articles: articlesReducer,
    users: usersReducer,
    products: productsReducer
});