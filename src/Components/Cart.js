import React from 'react'
import {connect} from 'react-redux'
import { Container , Row, Col } from 'react-bootstrap';
import { loadCartProductsBackend } from '../Actions/CART_ACTIONS';
import CartProduct from './CartProduct'
import Payment from './Payment'

 class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ProductsInCart : []
        }
    }

    componentDidMount() {
        this.props.loadCartProducts(this.props.user.email)
    }

    componentDidUpdate() {

        this.props.loadCartProducts(this.props.user.email)

    }

    displayCartProducts = () => {

        return (
            <>
            <h3 style = {{color : "blueviolet"}}>Your Products</h3>
            {
                this.props.cartProducts.map((obj) =>
                    <CartProduct product = {obj} />
                )
            }
            </>
        )
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={9}>{this.displayCartProducts()}</Col>
                    <Col lg={3}><Payment /></Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state , ownProps) => {

    return {
        user : state.credentials_reducer,
        cartProducts : state.cart_reducer
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        loadCartProducts : (userEmail) => dispatch(loadCartProductsBackend(userEmail))

    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Cart)