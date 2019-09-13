import { ADD_ARTICLE } from '../constants/action-types';

export const addArticle = (payload) => {
    return {
        type: ADD_ARTICLE,
        payload
    }
};

let nextTodoId = 0;
export const addTodo = (task) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        task
    };
};