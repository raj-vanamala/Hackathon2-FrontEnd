import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Container,Row,Col,Card } from 'react-bootstrap'
import {connect} from 'react-redux'

function MyOrders({user}) {

    const [MyOrders , setMyOrders]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:4040/loadMyOrders/${user.email}`)

        .then((response)=>{
            let data = response.data.data;
            let products = [];
            data.map(eachOrder => products.push(...eachOrder.products))
            setMyOrders([...products])
        })

        .catch((err)=>console.log(err))
    },[user.email])

    return (
        <Container>
                {
                    (MyOrders.length === 0)?<h3>No Products Yet</h3>
                    : 
                    MyOrders.map((eachProduct,id)=>
                    <Card className = "mb-2" key = {id}>
                        <Card.Body>
                            <Row style = {{display : "flex" , flexDirection : "row" , flexWrap : "wrap"}}>

                                <Col lg = {3}>
                                    <Row><Col><h6 style = {{color : "blueviolet"}}>Product Name</h6></Col></Row>
                                    <Row><Col>{eachProduct.productName}</Col></Row>
                                </Col>

                                <Col lg = {3}>
                                    <Row><Col><h6 style = {{color : "blueviolet"}}>Quantity</h6></Col></Row>
                                    <Row><Col>{eachProduct.quantity}</Col></Row>
                                </Col>

                                <Col lg = {3}>
                                    <Row><Col><h6 style = {{color : "blueviolet"}}>Purchase Date</h6></Col></Row>
                                    <Row><Col>{eachProduct.purchaseDate}</Col></Row>
                                </Col>

                                <Col lg = {3}>
                                    <Row><Col><h6 style = {{color : "blueviolet"}}>Return Date</h6></Col></Row>
                                    <Row><Col>{eachProduct.returnDate}</Col></Row>
                                </Col>

                                <Col lg = {3}>
                                <Row><Col><h6 style = {{color : "blueviolet"}}>From(Time In 24 Hours)</h6></Col></Row>
                                <Row><Col>{eachProduct.FromTime} : 00 Hrs</Col></Row>
                                </Col>

                                <Col lg = {3}>
                                    <Row><Col><h6 style = {{color : "blueviolet"}}>To(Time In 24 Hours)</h6></Col></Row>
                                    <Row><Col>{eachProduct.ToTime} : 00 Hrs</Col></Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    )
                }
        </Container>
    )
    
}

const mapStateToProps = (state) => {
    return {

        user : state.credentials_reducer
    }
}

export default connect(mapStateToProps)(MyOrders);