import React from 'react'
import { Row, Col , Card , Form,Button} from 'react-bootstrap';
import { addProductToOrders } from '../Actions/CART_ACTIONS'
import { connect } from 'react-redux'

class CartProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            quantity : '1',
            purchaseDate : "",
            returnDate : "",
            timeSelection : [
                0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23
            ],
            FromTime : "",
            ToTime : ""
        }
    }

    changeStateValue = (event) => {

        let target = event.target;

        if(target.name === "quantity") {
            console.log(target.value);
            this.setState({
                quantity : target.value
            })
        }
        else if(target.name === "purchaseDate") {
            console.log(target.value);
            this.setState({
                purchaseDate : target.value
            })
        }
        else if(target.name === "returnDate") {
            console.log(target.value);
            this.setState({
                returnDate : target.value
            })
        }
        else if(target.name === "FromTime") {
            console.log(target.value);
            this.setState({
                FromTime : target.value
            })
        }
        else if(target.name === "ToTime") {
            console.log(target.value);
            this.setState({
                ToTime : target.value
            })
        }
    }

    calculateProductPrice = () => {

        let d1=new Date(this.state.purchaseDate);
        let d2=new Date(this.state.returnDate);
        let totalDays=0,totalHours=0,totalPrice=0;

        for (d1; d1 < d2; d1.setDate(d1.getDate() + 1)) {
            totalDays=totalDays+1
        }

        if(totalDays === 0) {
            totalHours = this.state.ToTime - this.state.FromTime;
        } else {
            totalHours = ((24 - this.state.FromTime) + ((totalDays - 1) * 24) + (24-this.state.ToTime))
        }
        console.log(totalHours)
        totalPrice = (this.props.product.productPrice * totalHours) * this.state.quantity
        console.log(totalPrice);
        // let cartProduct = {
        //     "email" : this.props.user.email,
        //     productInfo :   {
        //                 productName : this.props.product.productName,
        //                 quantity : this.state.quantity,
        //                 purchaseDate : this.state.purchaseDate,
        //                 returnDate : this.state.returnDate,
        //                 FromTime : this.state.FromTime,
        //                 ToTime : this.state.ToTime,
        //                 Hours : totalHours,
        //                 Price : totalPrice
        //                 }
        // }
        // this.props.addProductToOrders(cartProduct)
    }

    render() {

        return (
            <Card className = "mb-2">
            <Card.Body>
                <Row style = {{display : "flex" , flexDirection : "row" , flexWrap : "wrap"}}>
                    <Col lg = {3}>
                        <Row><Col><h6 style = {{color : "blueviolet"}}>Product Name</h6></Col></Row>
                        <Row><Col>{this.props.product.productName}</Col></Row>
                    </Col>
                    <Col lg = {3}>
                        <Row><Col><h6 style = {{color : "blueviolet"}}>Quantity</h6></Col></Row>
                        <Row><Col>
                        <Form.Group controlId="formBasicQuantity">
                            <Form.Control as="select" onChange={this.changeStateValue} name = 'quantity'>
                            <option value='1' defaultValue>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            </Form.Control>
                        </Form.Group>
                        </Col></Row>
                    </Col>
                    <Col lg = {3}>
                        <Row><Col><h6 style = {{color : "blueviolet"}}>From</h6></Col></Row>
                        <Row><Col><input type = "date" onChange={this.changeStateValue} name = 'purchaseDate' /></Col></Row>
                    </Col>
                    <Col lg = {3}>
                        <Row><Col><h6 style = {{color : "blueviolet"}}>To</h6></Col></Row>
                        <Row><Col><input type = "date" onChange={this.changeStateValue} name = 'returnDate' /></Col></Row>
                    </Col>
                    <Col lg = {3}>
                        <Row><Col><h6 style = {{color : "blueviolet"}}>From(Time In 24 Hours)</h6></Col></Row>
                        <Row><Col>
                        <Form.Group controlId="formBasicTime1">
                            <Form.Control as="select" onChange={this.changeStateValue} name = 'FromTime'>
                            <option value='Please Select Time' defaultValue>Please Select Time</option>
                            {
                                this.state.timeSelection.map((val)=>
                                    <option value = {val}>{val} : 00 Hrs</option>
                                )
                            }
                            </Form.Control>
                        </Form.Group>
                        </Col></Row>
                    </Col>
                    <Col lg = {3}>
                        <Row><Col><h6 style = {{color : "blueviolet"}}>To(Time In 24 Hours)</h6></Col></Row>
                        <Row><Col>
                        <Form.Group controlId="formBasicTime2">
                            <Form.Control as="select" onChange={this.changeStateValue} name = 'ToTime'>
                            <option value='Please Select Time' defaultValue>Please Select Time</option>
                            {
                                this.state.timeSelection.map((val)=>
                                    <option value = {val}>{val} : 00 Hrs</option>
                                )
                            }
                            </Form.Control>
                        </Form.Group>
                        </Col></Row>
                    </Col>
                    <Col lg = {5}>
                        <Row><Col></Col></Row>
                        <Row><Col style = {{marginTop:"25px"}}><Button onClick= {this.calculateProductPrice}>Add Product To Final Payment</Button>  </Col></Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        user : state.credentials_reducer 
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addProductToOrders : (product) => dispatch(addProductToOrders(product))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartProduct)