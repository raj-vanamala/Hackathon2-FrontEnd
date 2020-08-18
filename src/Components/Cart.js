import React from 'react'
import {connect} from 'react-redux'

 class  Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ProductsInCart : []
        }
    }

    componentDidMount() {

        fetch("https://hackathon2-backend-code.herokuapp.com/loadProductsInCart"+this.props.user.email)

        .then((response)=>response.json())

        .then((products) =>{
            console.log(products.data);
            this.setState({
                ProductsInCart : products.data
            })
        })

        .catch((err)=>console.log(err))
    }

    render() {
        return <h1>cart</h1>
    }
}

const mapStateToProps = (state , ownProps) => {

    return {
        user : state.credentials_reducer
    }
}

export default connect(mapStateToProps)(Cart)