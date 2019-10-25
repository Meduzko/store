import { ADD_ARTICLE } from '../constants/action-types';
import PlaceholderService from '../services/placeholderService';

export const addArticle = (payload) => {
    return {
        type: ADD_ARTICLE,
        payload
    }
};

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const data = await PlaceholderService.getDefaultPlaceholder();
            dispatch({
                type: 'GET_PRODUCTS',
                payload: data
            });
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
};

export const addProducts = (payload) => {
    return {
        type: 'ADD_PRODUCTS',
        payload
    }
};

export const openProduct = (payload, id) => {
    return {
        type: 'OPEN_PRODUCT',
        payload,
        id
    }
};

export const handleOpening = (id) => {
    return {
        type: 'HANDLE_OPENING',
        id
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