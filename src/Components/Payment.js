import React, { useEffect,useState } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import { Container, Row, Col,Button } from 'react-bootstrap'

function Payment({user}) {

    const [paymentInfo , setPaymentInfo]=useState(undefined)

    useEffect(()=>{
        axios.get("http://localhost:4040/paymentInfo/"+user.email)

        .then((response) => {
            setPaymentInfo(response.data.data)
            })

        .catch((err)=>console.log(err))

    })

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
                    <Col lg = {12}><Button variant="outline-info" style = {{marginTop:"20px"}}>Proceed To CheckOut</Button></Col>
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