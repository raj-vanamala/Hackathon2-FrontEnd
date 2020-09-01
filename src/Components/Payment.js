import React, { useEffect,useState } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import { Container, Row, Col,Button } from 'react-bootstrap'


function Payment({user}) {

    const [paymentInfo , setPaymentInfo]=useState(undefined)

    useEffect(()=>{
        axios.get("https://hackathon2-backend-code.herokuapp.com/"+user.email)

        .then((response) => {
            setPaymentInfo(response.data.data)
            })

        .catch((err)=>console.log(err))

    })

    function loadRazorPay() {

        return new Promise(resolve => {

            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js'
            script.onload = () => {
                resolve(true)
            }

            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    async function displayRazorPay() {

        const result = await loadRazorPay()

        if(!result) {
            alert('Payment Failed')
            return
        }

        const response = await axios.get(`https://hackathon2-backend-code.herokuapp.com/razorPay/${user.email}`)

        const options = {
            "key": "rzp_test_7BBC9fnd2CtNLJ",
            "currency": response.data.currency,
            "amount": response.data.amount.toString(),
            "order_id": response.data.id,
            "name": "Redefine Equipment Rentals",
            "description": "Proceed To Pay Total Amount Of",
            "handler": function (data){
                if(data.razorpay_order_id === response.data.id)
                    axios.post("https://hackathon2-backend-code.herokuapp.com/addProductsToMyOrders/",paymentInfo)
            },
            "prefill": {
                "name": user.firstName,
                "email": user.email,
                "contact": user.mobile
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return(
        <Container>
            <h3 style = {{color : "blueviolet"}}>Payment Info</h3>
                {
                    (paymentInfo === undefined)?<h3 style = {{color : "blueviolet"}}>No Products</h3>
                    : 
                    <Row>
                    {paymentInfo.products.map((product,id)=>
                        <>
                            <Col lg = {6} style = {{color : "blueviolet"}}>Product {id+1} : </Col>
                            <Col lg = {6}>{product.productName}</Col>
                        </>
                    )}
                    <Col lg = {6} style = {{color : "blueviolet"}}>Products : </Col>
                    <Col lg = {6}>{paymentInfo["Total Products"]}</Col>
                    <Col lg = {6} style = {{color : "blueviolet"}}>Amount : </Col>
                    <Col lg = {6}>{paymentInfo["Total Price"]} Rs</Col>
                    <Col lg = {12}><Button variant="outline-info" style = {{marginTop:"20px"}} onClick={displayRazorPay}>Proceed To CheckOut</Button></Col>
                    </Row>
                }
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {

        user : state.credentials_reducer
    }
}

export default connect(mapStateToProps)(Payment);