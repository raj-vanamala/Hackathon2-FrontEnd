import React from 'react'
import {Form,InputGroup,Button,FormControl} from 'react-bootstrap'
import { FaKey,FaEnvelope } from 'react-icons/fa'
import SignUp from './SignUp';
import App from "./App"
import { connect } from 'react-redux'
import { setCurrentUser } from '../Actions/CREDENTIALS_ACTIONS'

class SignIn extends React.Component {

    constructor(props) {
        super();
        this.state = {
            email : "",
            password : "",
            IS_LOGIN_SUCCESS : false,
            JWT : "",
            IS_SIGN_UP : false
        }
    }

    changeCredentialValues = (event) => {
        let target = event.target;

        if(target.name === "email") {
            this.setState({
                email : target.value
            })
        } else {
            this.setState({
                password : target.value
            })
        }
    }

    verifyCredentials = (event) => {

        event.preventDefault();
    
            let url = 'https://hackathon2-backend-code.herokuapp.com/signIn'
    
            fetch(url,{
                "method" : "post",
                "headers" :{
                    'Content-Type': 'application/json'
                },
                "body" : JSON.stringify({
                    "email" : this.state.email,
                    "password" : this.state.password
                })
            })
    
            .then((response)=>response.json())
    
            .then((data)=>{
                alert(data.message);
                if(data.status === 'Successful') {
                    this.setState({
                        IS_LOGIN_SUCCESS : true,
                        JWT : data.token,
                        IS_SIGN_UP : undefined
                    })
                return data.userDetails
                }
            })
    
            .then((user)=>{
                window.localStorage.setItem('authorizationToken',this.state.JWT)
                this.setState({
                    email : "",
                    password : ""
                })
                this.props.setCurrentUser(user)
            })
    
            .catch((err)=>console.log(err))
        
    }

    displaySignUpComponent = () => {

        this.setState({
            IS_SIGN_UP : !this.state.IS_SIGN_UP
        })
    }

    displaySignInComponent = () => {

        return(
            <div className="form-css" style = {{width: "50%",margin: "auto"}}>
                <h4 className="mt-4" style = {{color:"blueViolet"}}>Sign In</h4>
                <Form inline>
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
                    (this.state.email !== "" && this.state.password !== "")?
                    <Button type="submit" className="mt-4" variant="outline-success" onClick={this.verifyCredentials}>
                    SignIn
                    </Button>
                    :
                    <Button type="submit" className="mt-4" variant="outline-success" onClick={this.verifyCredentials} disabled>
                    SignIn
                    </Button>
                }

                <Button variant="link" onClick={this.displaySignUpComponent} style={{marginTop : "20px",color:"blueViolet"}}>SignUp?</Button>
                
                </Form>
            </div>
        )
    }

    render() {

        if(this.state.IS_SIGN_UP === true)
            return <SignUp />
        
        else if(this.state.IS_SIGN_UP === false)
            return this.displaySignInComponent()
        
        else if(this.state.IS_LOGIN_SUCCESS === true)
            return <App />
    }
}


const mapDispatchToProps = (dispatch , ownProps) => {

    return {

        setCurrentUser : (user) => dispatch(setCurrentUser(user))
    }
}

export default connect(null , mapDispatchToProps)(SignIn)