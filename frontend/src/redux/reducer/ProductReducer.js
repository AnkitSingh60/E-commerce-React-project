export const { GET_PRODUCTS, LODDING_PRODUCTS, ERROR_PRODUCTS } = require('../action/productsAction');
const initialState = {
    loading: false,
    error: null,
    data: []
}
export const productsreducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }
        case LODDING_PRODUCTS:
            return {
                ...state,
                loading: true,
                error: null,
                data: []
            }
        case ERROR_PRODUCTS:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }
        default:
            return state;
    }

}