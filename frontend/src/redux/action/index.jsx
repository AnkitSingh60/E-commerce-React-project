// for add items in cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload: product
    }
}
// for delete items in cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload: product
    }
}