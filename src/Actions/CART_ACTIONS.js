import axios from 'axios'

const loadCartProducts = (cartProducts) => {

    return { type : "LOAD_CART_DATA" , payload : cartProducts}

}

export  const loadCartProductsBackend = (userEmail) => {

    return (dispatch , getState) => {

        axios.get("http://localhost:4040/loadProductsInCart"+userEmail)

        .then((response) => dispatch(loadCartProducts(response.data.data)))

        .catch((err)=>console.log(err))

    }
}

export const addProductToOrders = (product) => {

    return (dispatch , getState) => {

        axios.post("http://localhost:4040/addProductToOrders",product)

        .then((response) => alert(response.data.message))

        .catch((err)=>console.log(err))
    }
}