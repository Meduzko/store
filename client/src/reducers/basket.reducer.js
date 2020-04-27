const initialState = {
    products: []
};

const addItem = (products, payload) => {
    const { id } = payload.item;
    const isExistingItem = products.filter(product => product.item.id === id);

    if (isExistingItem.length > 0) {
   //     isExistingItem[0].count++;

       return [...products];
    }

    return [...products, payload];
};

const setItemCount = (products, payload) => {
    const { id } = payload.item;
    const { increase, decrease } = payload;
    const isExistingItem = products.filter(product => product.item.id === id);

    if (isExistingItem.length > 0 && increase) {
        isExistingItem[0].count++;
    } else {
        isExistingItem[0].count--;
    }

    return [...products];
};

const increaseCount = (products, item) => {
    item.count++;

    return [...products];
};
const decreaseCount = (products, item) => {
    if (item.count > 1) {
        item.count--;
    }

    return [...products];
};

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                products: addItem(state.products, action.payload)
            };
        case 'REMOVE_ITEM':
           return {
               ...state,
               products: state.products.filter(i => i.item.id !== action.payload.item.id)
           };
        case 'INCREASE_COUNT':
            return {
                ...state,
                products: increaseCount(state.products, action.payload)
            };
        case 'DECREASE_COUNT':
            return {
                ...state,
                products: decreaseCount(state.products, action.payload)
            };
        default:
            return state;
    }
};