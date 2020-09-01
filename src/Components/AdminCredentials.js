import React from 'react'
import {Form,InputGroup,Button,FormControl} from 'react-bootstrap'
import { FaKey,FaEnvelope, FaUser, FaMobile } from 'react-icons/fa'
import AdminApp from "./AdminApp";

import { connect } from 'react-redux'
import { setCurrentUser } from '../Actions/CREDENTIALS_ACTIONS'
import UserCredentials from './UserCredentials';

class AdminCredentials extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName : "",
            email : "",
            password : "",
            mobile : "",
            IS_LOGIN_SUCCESS : false,
            JWT : "",
            loginEmail : "",
            loginPassword : "",
            IS_USER : false
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
        else if(target.name === "loginEmail") {
            console.log(target.value)
            this.setState({
                loginEmail : target.value
            })
        }
        else if(target.name === "loginPassword"){
            console.log(target.value)
            this.setState({
                loginPassword : target.value
            })
        }
    }

    displaySignInComponent = () => {

        return(
            <div className="form-css" style = {{width: "50%",margin: "auto"}}>
                <h4 className="mt-4" style = {{color:"blueViolet"}}>Admin Sign In</h4>
                <Form>
                <InputGroup className="mt-4 mr-sm-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text> <FaEnvelope /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name ="loginEmail"
                        placeholder="Email"
                        value = {this.state.loginEmail}
                        onChange={this.changeCredentialValues}
                    />
                </InputGroup>
                <InputGroup className="mt-4 mr-sm-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text> <FaKey /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                        name ="loginPassword"  
                        type="password"  
                        placeholder="Password" 
                        value={this.state.loginPassword}
                        onChange={this.changeCredentialValues}
                    />
                </InputGroup>
                {
                    (this.state.loginEmail !== "" && this.state.loginPassword !== "")?
                    <Button type="submit" className="mt-4" variant="outline-success" onClick={this.verifyLoginCredentials}>
                    SignIn
                    </Button>
                    :
                    <Button type="submit" className="mt-4" variant="outline-success" onClick={this.verifyLoginCredentials} disabled>
                    SignIn
                    </Button>
                }
                <Button variant="link" onClick={this.displayUserComponent} style={{marginTop : "20px",color:"blueViolet"}}>User?</Button>
                </Form>
            </div>
        )
    }

    verifyLoginCredentials = (event) => {

        event.preventDefault();
    
            let url = 'http://localhost:4040/signIn'
    
            fetch(url,{
                "method" : "post",
                "headers" :{
                    'Content-Type': 'application/json'
                },
                "body" : JSON.stringify({
                    "email" : this.state.loginEmail,
                    "password" : this.state.loginPassword
                })
            })
    
            .then((response)=>response.json())
    
            .then((data)=>{
                alert(data.message);
                if(data.status === 'Successful') {
                    this.setState({
                        IS_LOGIN_SUCCESS : true,
                        JWT : data.token,
                        IS_USER : undefined
                    })
                return data.userDetails
                }
            })
    
            .then((user)=>{
                window.localStorage.setItem('authorizationToken',this.state.JWT)
                this.setState({
                    loginEmail : "",
                    loginPassword : ""
                })
                this.props.setCurrentUser(user)
            })
    
            .catch((err)=>console.log(err))
        
    }

    displaySignUpComponent = () => {

        return (
            
            <div style = {{width: "50%",margin: "auto"}}>
                <h4 className="mt-4" style = {{color:"blueViolet"}}>Admin Sign Up</h4>
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
                    <Button type="submit" className="mt-4" variant="outline-success" onClick={this.verifySignUpCredentials}>
                    signUp
                    </Button>
                    :
                    <Button type="submit" className="mt-4" variant="outline-success" onClick={this.verifySignUpCredentials} disabled>
                    signUp
                    </Button>
                }
                <Button variant="link" onClick={this.displayUserComponent} style={{marginTop : "20px",color:"blueViolet"}}>User?</Button>
                </Form>
            </div>
        )
    }

    verifySignUpCredentials = (event) => {


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
                    IS_USER : undefined
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

    displayUserComponent = () => {

        this.setState({
            IS_USER : !this.state.IS_USER
        })
    }

    render() {
        
        if(this.state.IS_LOGIN_SUCCESS === true)
            return <AdminApp />
        else if(this.state.IS_USER === true)
            return <UserCredentials />
        else
            return [this.displaySignInComponent() ,this.displaySignUpComponent()]
    }
}

const mapDispatchToProps = (dispatch , ownProps) => {

    return {

        setCurrentUser : (user) => dispatch(setCurrentUser(user))
    }
}

export default connect(null , mapDispatchToProps)(AdminCredentials)