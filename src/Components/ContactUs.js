import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Form,InputGroup,Button,FormControl} from 'react-bootstrap'
import { FaEnvelope, FaUser, FaMobile } from 'react-icons/fa'

export default class ContactUs extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName : "",
            email : "",
            mobile : "",
            requestInfo : ""
        }
    }

    changeCredentialValues = (event) => {
        let target = event.target;

        if(target.name === "firstName"){
            this.setState({
                firstName : target.value
            })
        }
        else if(target.name === "mobile"){
            this.setState({
                mobile : target.value
            })
        }
        else if(target.name === "email") {
            this.setState({
                email : target.value
            })
        }
        else if(target.name === "request") {
            this.setState({
                requestInfo : target.value
            })
        }

    }

    submitRequest = (event) => {


        event.preventDefault();

        let url = 'https://hackathon2-backend-code.herokuapp.com/submitRequest'

        fetch(url,{
            "method" : "post",
            "headers" :{
                'Content-Type': 'application/json'
            },
            "body" : JSON.stringify({
                "firstName" : this.state.firstName,
                "email" : this.state.email,
                "mobile" : this.state.mobile,
                "RequestInfo"  :this.state.requestInfo
            })
        })

        .then((response)=>response.json())

        .then((data)=>{
            alert(data.message);
        })

        .then((user)=>{
            window.localStorage.setItem('authorizationToken',this.state.JWT)
            this.setState({
                firstName : "",
                mobile :"",
                email : "",
                requestInfo : ""
            })
        })

        .catch((err)=>alert(err))
    }

    render() {
        return (
            <Container>
            <Row>
                <Col lg = {7}>
                    <h2 style = {{color:"blueViolet"}}>About Us</h2>
                    <h6 style = {{textAlign : "justify",textJustify : "inter-word",marginTop: "30px"}}>For a long time, we have felt that enabling smooth and frictionless Product Rental System is a major problem and nobody seems to be doing it right. We decided to tackle it ourselves.</h6>
                    <h6 style = {{textAlign : "justify",textJustify : "inter-word"}}>Founded by Sikkim Manipal University alumni, <b style={{color : "blueviolet"}}>Redefine</b> aims to revolutionize Product Rental management for online businesses by providing clean and hassle-free process. We offer a fast, affordable and secure way for Customers.</h6>     
                    
                    <h2 style = {{color:"blueViolet",marginTop: "50px"}}>Our WorkSpace</h2>
                    <h3 style = {{color:"blueViolet",textAlign : "center",marginTop: "30px"}}>Hyderabad Headquarters</h3>
                    <h6 style = {{textAlign : "center"}}>1st Floor, Cyber Towers, 22, Hi-tech City, Hyderabad, Telangana - 507117</h6>
                </Col>
                <Col lg = {5}>
                <Form>
                <h2 style = {{color:"blueViolet"}}>Information Request Form</h2>
                <InputGroup className="mt-4 mr-sm-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text> <FaUser /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name ="firstName"
                        placeholder="Enter Name"
                        value = {this.state.firstName}
                        onChange={this.changeCredentialValues}
                    />
                </InputGroup>
                <InputGroup className="mt-4 mr-sm-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text> <FaMobile /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name ="mobile"
                        placeholder="Enter Mobile Number"
                        value = {this.state.mobile}
                        onChange={this.changeCredentialValues}
                    />
                </InputGroup>
                <InputGroup className="mt-4 mr-sm-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text> <FaEnvelope /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name ="email"
                        placeholder="Email"
                        value = {this.state.email}
                        onChange={this.changeCredentialValues}
                    />
                </InputGroup>

                <Form.Group controlId="exampleForm.ControlTextarea1" className="mt-4 mr-sm-2">
                <Form.Control 
                    as="textarea" 
                    rows="3" 
                    name="request" 
                    value={this.state.requestInfo} 
                    onChange = {this.changeCredentialValues} 
                    maxLength="150"
                    placeholder = "Write Your Request Here..."
                />
                </Form.Group>
                {
                    (this.state.email !== "" && this.state.firstName !== "" && this.state.mobile !== "" && this.state.requestInfo !== "")?
                    <Button type="submit" className="mt-4" variant="outline-info" onClick={this.submitRequest}>
                    Submit Request
                    </Button>
                    :
                    <Button type="submit" className="mt-4" variant="outline-info" onClick={this.submitRequest} disabled>
                    Submit Request
                    </Button>
                }
                </Form>
                </Col>
            </Row>
        </Container>
        )
    }
}