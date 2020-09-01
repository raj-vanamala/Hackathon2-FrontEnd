import axios from 'axios'

const loadCartProducts = (cartProducts) => {

    return { type : "LOAD_CART_DATA" , payload : cartProducts}

}

export  const loadCartProductsBackend = (userEmail) => {

    return (dispatch , getState) => {

        axios.get("https://hackathon2-backend-code.herokuapp.com/loadProductsInCart"+userEmail)

        .then((response) => dispatch(loadCartProducts(response.data.data)))

        .catch((err)=>console.log(err))

    }
}

export const addProductToOrders = (product) => {

    return (dispatch , getState) => {

        axios.post("https://hackathon2-backend-code.herokuapp.com/addProductToOrders",product)

        .then((response) => alert(response.data.message))

        .catch((err)=>console.log(err))
    }
}