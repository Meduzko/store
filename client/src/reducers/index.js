import { combineReducers } from 'redux';
import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
    users: {},
    articles: {}
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

export default combineReducers({
    articles: articlesReducer,
    users: usersReducer
});