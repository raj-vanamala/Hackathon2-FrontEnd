const currentUser = {}

const credentials_reducer = (state=currentUser , action) => {

    switch(action.type) {

        case "SET_USER" : 
            return action.payload
        default : 
            return state
        
    }
}

export default credentials_reducer;