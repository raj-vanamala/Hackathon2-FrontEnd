const cartProducts = []

const cart_reducer = (state = cartProducts, action) => {

    switch(action.type) {
        case "LOAD_CART_DATA" : 
            return action.payload

        default : 
            return state
    }
}

export default cart_reducer;