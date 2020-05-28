const initialState = {
    products: [],
    totalPrice: 0
};

const addItem = (state, payload) => {
    const { id, price } = payload.item;
    const { products } = state;
    const isExistingItem = products.filter(product => product.item.id === id);

    if (isExistingItem.length > 0) {
   //     isExistingItem[0].count++;

       return [...products];
    }

    state.totalPrice = state.totalPrice += setTotalPrice(payload);
    return [...products, payload];
};

const increaseCount = (state, item) => {
    const { products } = state;

    item.count++;
    state.totalPrice += item.item.price;

    return [...products];
};

const decreaseCount = (state, item) => {
    const { products } = state;

    if (item.count > 1) {
        item.count--;
        state.totalPrice -= item.item.price;
    }

    return [...products];
};

const setTotalPrice = (item) => {
    const { count } = item;

    return count * item.item.price;
};

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                products: addItem(state, action.payload),
            };
        case 'REMOVE_ITEM':
           return {
               ...state,
               products: state.products.filter(i => i.item.id !== action.payload.item.id),
               totalPrice: state.totalPrice -= setTotalPrice(action.payload)
           };
        case 'INCREASE_COUNT':
            return {
                ...state,
                products: increaseCount(state, action.payload)
            };
        case 'DECREASE_COUNT':
            return {
                ...state,
                products: decreaseCount(state, action.payload)
            };
        default:
            return state;
    }
};