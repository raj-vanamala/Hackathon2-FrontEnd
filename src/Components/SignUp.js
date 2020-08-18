import React from 'react'
import {Form,InputGroup,Button,FormControl} from 'react-bootstrap'
import { FaKey,FaEnvelope, FaUser, FaMobile } from 'react-icons/fa'
import SignIn from './SignIn';
import App from "./App";

import { connect } from 'react-redux'
import { setCurrentUser } from '../Actions/CREDENTIALS_ACTIONS'

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName : "",
            email : "",
            password : "",
            mobile : "",
            IS_LOGIN_SUCCESS : false,
            JWT : "",
            IS_SIGN_IN : false
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
        else if(target.name === "password"){
            this.setState({
                password : target.value
            })
        }
    }

    verifyCredentials = (event) => {


            event.preventDefault();
    
            let url = 'http://localhost:4040/signUp'
    
            fetch(url,{
                "method" : "post",
                "headers" :{
                    'Content-Type': 'application/json'
                },
                "body" : JSON.stringify({
                    "firstName" : this.state.firstName,
                    "email" : this.state.email,
                    "password" : this.state.password,
                    "mobile" : this.state.mobile,
                })
            })
    
            .then((response)=>response.json())
    
            .then((data)=>{
                alert(data.message);
                console.log(data);
                if(data.status === 'success') {
                    this.setState({
                        IS_LOGIN_SUCCESS : true,
                        JWT : data.token,
                        IS_SIGN_IN : undefined
                    })
                    return data.userDetails
                }
            })
    
            .then((user)=>{
                window.localStorage.setItem('authorizationToken',this.state.JWT)
                this.setState({
                    firstName : "",
                    mobile :"",
                    email : "",
                    password : ""
                })
                this.props.setCurrentUser(user)
            })
    
            .catch((err)=>alert(err))
    }

    displaySignInComponent = () => {

        this.setState({
            IS_SIGN_IN : !this.state.IS_SIGN_IN
        })
    }

    displaySignUpComponent = () => {

        return (
            <div style = {{width: "50%",margin: "auto"}}>
                <h4 className="mt-4" style = {{color:"blueViolet"}}>Sign Up</h4>
                <Form>
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
                <InputGroup className="mt-4 mr-sm-2">

                <InputGroup.Prepend>
                    <InputGroup.Text> <FaKey /></InputGroup.Text>
                    </InputGroup.Prepend>
                    
                    <FormControl 
                        name ="password"  
                        type="password"  
                        placeholder="Password" 
                        value={this.state.password}
                        onChange={this.changeCredentialValues}
                    />
                </InputGroup>
                {
                    (this.state.email !== "" && this.state.password !== "" && this.state.firstName !== "" && this.state.mobile !== "")?
                    <Button type="submit" className="mt-4" variant="outline-success" onClick={this.verifyCredentials}>
                    signUp
                    </Button>
                    :
                    <Button type="submit" className="mt-4" variant="outline-success" onClick={this.verifyCredentials} disabled>
                    signUp
                    </Button>
                }

                <Button variant="link" onClick={this.displaySignInComponent} style={{marginTop : "20px",color:"blueViolet"}}>SignIn?</Button>
                </Form>
            </div>
        )
    }

    render() {
        
        if(this.state.IS_SIGN_IN === true)
            return <SignIn />
        
         if(this.state.IS_SIGN_IN === false)
            return this.displaySignUpComponent()
        
        else if(this.state.IS_LOGIN_SUCCESS === true)
            return <App />
    }
}

const mapDispatchToProps = (dispatch , ownProps) => {

    return {

        setCurrentUser : (user) => dispatch(setCurrentUser(user))
    }
}

export default connect(null , mapDispatchToProps)(SignUp)