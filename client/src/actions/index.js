import { ADD_ARTICLE } from '../constants/action-types';
import ProductService from '../services/productService';

export const addArticle = (payload) => {
    return {
        type: ADD_ARTICLE,
        payload
    }
};

export const getProducts = () => {
    return async (dispatch, getState) => {
        try {
            const data = await ProductService.getDefaultProducts();
            dispatch({ type: 'GET_PRODUCTS', data });
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