import axios from "axios";
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const LODDING_PRODUCTS = 'LODDING_PRODUCTS';
export const ERROR_PRODUCTS = 'ERROR_PRODUCTS';
export const getproducts = (payload) => ({
        type: GET_PRODUCTS,
        payload
})
export const loadingproducts = () => ({
        type: LODDING_PRODUCTS
})
export const errorproducts = (payload) => ({
        type: ERROR_PRODUCTS,
        payload
})
export const getProductsData = () => {
        return (dispatch) => {
                dispatch(loadingproducts());
                axios.get("/products/")
                        .then(res => {
                                dispatch(getproducts(res.data))
                        }
                        )
                        .catch(err => { dispatch(errorproducts(err)) }
                        )
        }
}