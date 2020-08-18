import React from 'react'
import { Container , FormControl , InputGroup, Form , Button , Row, Col} from 'react-bootstrap'

export default class AdminProducts extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            productName : "",
            productPrice : "",
            productCategory : "Mobiles"
        }
    }

    changeStateValues = (event) => {
        let target = event.target;

        if(target.name === "productName"){
            this.setState({
                productName : target.value
            })
        }
        else if(target.name === "productPrice"){
            this.setState({
                productPrice : target.value
            })
        }
        else if(target.name === "productCategory"){
            this.setState({
                productCategory : target.value
            })
        }
    }

    addProduct = (event) => {

        event.preventDefault();

        let url = 'http://localhost:4040/addProduct'

        fetch(url,{
            "method" : "post",
            "headers" :{
                'Content-Type': 'application/json'
            },
            "body" : JSON.stringify({
                productName : this.state.productName,
                productPrice : this.state.productPrice,
                productCategory : this.state.productCategory
            })
        })

        .then((response)=>response.json())

        .then((data)=>{
            alert(data.message);
        })

        .then(()=>{
            this.setState({
                productName : "",
                productPrice : "",
                productCategory  : "Mobiles"
            })
        })

        .catch((err)=>alert(err))
    }

    render() {

        return (
            <Container>
                <h2 style = {{color:"blueViolet"}}>Add Product</h2>
                <Form>
                <Row>
                    <Col lg = {5}>
                        <InputGroup className="mt-4 mr-sm-2">

                            {/* <InputGroup.Prepend>
                            <InputGroup.Text> <FaQuestion /></InputGroup.Text>
                            </InputGroup.Prepend> */}
                            <FormControl as="select" onChange={this.changeStateValues} name = 'productCategory'>
                                <option value='Mobiles' defaultValue>Mobiles</option>
                                <option value='Computers'>Computers</option>
                                <option value='ElectronicAppliances'>ElectronicAppliances</option>     
                                <option value='Vehicles'>Vehicles</option>
                                <option value='Books'>Books</option>
                                <option value='Kids Toys'>Kids Toys</option>     
                                <option value='Travel Products'>Travel Products</option>  
                            </FormControl>
                        </InputGroup>
                    </Col>
                    <Col lg = {7}></Col>
                    <Col lg = {5}>
                        <InputGroup className="mt-4 mr-sm-2">
                        {/* <InputGroup.Prepend>
                        <InputGroup.Text> <FaNam /></InputGroup.Text>
                        </InputGroup.Prepend> */}
                        <FormControl
                            name ="productName"
                            placeholder="Enter Product Name"
                            value = {this.state.productName}
                            onChange={this.changeStateValues}
                        />
                        </InputGroup>
                    </Col>
                    <Col lg = {7}></Col>
                    <Col lg = {5}>
                        <InputGroup className="mt-4 mr-sm-2">
                        {/* <InputGroup.Prepend>
                        <InputGroup.Text> <FaMobile /></InputGroup.Text>
                        </InputGroup.Prepend> */}
                        <FormControl
                            name ="productPrice"
                            placeholder="Enter Product Price"
                            value = {this.state.productPrice}
                            onChange={this.changeStateValues}
                        />
                        </InputGroup>
                    </Col>
                    <Col lg = {7}></Col>
                    <Col>
                        {
                        (this.state.productName !== "" && this.state.productPrice !== "")?
                        <Button type="submit" className="mt-4" variant="outline-info" onClick={this.addProduct}>
                        Add Product
                        </Button>
                        :
                        <Button type="submit" className="mt-4" variant="outline-info" onClick={this.addProduct} disabled>
                        Add Product
                        </Button>
                        }
                    </Col>
                </Row>
                </Form>
                </Container>
        )
    }
}