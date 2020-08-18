import React from 'react'
import { Container , Card , Button} from 'react-bootstrap'
// import { AdminProducts } from './AdminProducts'
import {connect } from "react-redux"

class  Products extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products : []
        }
    }

    componentDidMount() {

        fetch("https://hackathon2-backend-code.herokuapp.com/loadProducts")

        .then((response)=>response.json())

        .then((products) =>{
            console.log(products.data);
            this.setState({
                products : products.data
            })
        })

        .catch((err)=>console.log(err))
    }

    addProductToCart = (product) => {

        let url = 'https://hackathon2-backend-code.herokuapp.com/addProductToCart'

        fetch(url,{
            "method" : "post",
            "headers" :{
                'Content-Type': 'application/json'
            },
            "body" : JSON.stringify({
                email : this.props.user.email,
                productName : product.productName,
                productPrice : product.productPrice,
                productCategory : product.productCategory
            })
        })

        .then((response)=>response.json())

        .then((data)=>{
            alert(data.message);
        })

        .catch((err)=>alert(err))

    }

    render() {
            
        return (
                <Container>
                    <div style={{display  :"flex" , flexDirection  :"row" , flexWrap : "wrap"}}>
                    {
                        this.state.products.map((obj , id) =>
                        
                        <Card border="info" style={{ width: '18rem' , margin : "20px" }} key = {id}>
                        <Card.Header style={{color : "blueviolet"}}>{obj.productCategory}</Card.Header>
                        {/* <Card.Img variant="top" src="https://images.indianexpress.com/2019/10/smartphones-1.jpg" /> */}
                        <Card.Body>
                        <Card.Text>
                            {obj.productName}
                        </Card.Text>
                        <Card.Text>
                            {obj.productPrice} / Rs Per Hour
                        </Card.Text>
                        <Card.Text>
                            <Button variant = "outline-info" onClick={() => this.addProductToCart(obj)}><b>Add To Cart</b></Button>
                        </Card.Text>
                        </Card.Body>
                        </Card>
                        )
                    }  
                    </div>                             
                </Container>
            )
    }
}

const mapStateToProps = (state , ownProps) => {

    return {
        user : state.credentials_reducer
    }
}

export default connect(mapStateToProps)(Products)