const INITIAL_STATE = {
    products: []
}

const products = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload.products
            }
        default:
            return state;
    }
}
export default products;