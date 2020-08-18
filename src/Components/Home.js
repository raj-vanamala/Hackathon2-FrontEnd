import React from 'react'
import { Carousel, Container,Card } from 'react-bootstrap'
import { useState } from 'react'

import '../Styles/Home.css'

export default function Home() {

        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
        <>
          <Container>
              <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2020/07/01/04/27/cyber-monday-5358372__340.jpg"
                        alt="First slide"
                        style={{height:"300px"}}
                    />
                    <Carousel.Caption>
                        <h3 style={{color : "blueviolet"}}>Biggest Offers On This Monday</h3>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2018/07/25/18/36/ecommerce-3562005__340.jpg"
                        alt="Second slide"
                        style={{height:"300px"}}
                    />
            
                    <Carousel.Caption>
                        <h3 style={{color : "blueviolet"}}>Electronic Gadgets At 10% Lower Price</h3>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603__340.jpg"
                        alt="Third slide"
                        style={{height:"300px"}}
                    />
            
                    <Carousel.Caption>
                        <h3 style={{color : "blueviolet"}}>100% Secured Transactions</h3>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
          </Container>
          <h1 style={{color : "blueviolet",textAlign: "center"}}>Categories</h1>
          <div className="flex-css1">
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Header style={{color : "blueviolet"}}>Mobiles</Card.Header>
                        <Card.Img variant="top" src="https://images.indianexpress.com/2019/10/smartphones-1.jpg" />
                        <Card.Body>
                        <Card.Text>
                        {/* <button style={{display : 'block',backgroundColor : "blueviolet",borderRadius : "10px",fontWeight : "bolder"}}>View Products</button> */}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Header style={{color : "blueviolet"}}>Computers</Card.Header>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcd5HUQvYVwK6PqOYnzwxeqqEK-rIRGBU48w&usqp=CAU" />
                        <Card.Body>
                        <Card.Text>
                        {/* <button style={{display : 'block',backgroundColor : "blueviolet",borderRadius : "10px",fontWeight : "bolder"}}>View Products</button> */}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Header style={{color : "blueviolet"}}>Electronic Appliances</Card.Header>
                        <Card.Img variant="top" src="https://5.imimg.com/data5/GL/AB/GLADMIN-37892088/home-appliances-500x500.jpg" />
                        <Card.Body>
                        <Card.Text>
                        {/* <button style={{display : 'block',backgroundColor : "blueviolet",borderRadius : "10px",fontWeight : "bolder"}}>View Products</button> */}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Header style={{color : "blueviolet"}}>Home & Kitchen</Card.Header>
                        <Card.Img variant="top" src="https://www.butterflyindia.com/wp-content/themes/butterfly/images/kitchenappliances-img.png" />
                        <Card.Body>
                        <Card.Text>
                        {/* <button style={{display : 'block',backgroundColor : "blueviolet",borderRadius : "10px",fontWeight : "bolder"}}>View Products</button> */}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flex-css1">
                <Card border="info" style={{ width: '18rem' }}>
                        <Card.Header style={{color : "blueviolet"}}>Vehicles</Card.Header>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg" />
                        <Card.Body>
                        <Card.Text>
                        {/* <button style={{display : 'block',backgroundColor : "blueviolet",borderRadius : "10px",fontWeight : "bolder"}}>View Products</button> */}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Header style={{color : "blueviolet"}}>Books</Card.Header>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/06/10/01/16/book-5280551_960_720.jpg" />
                        <Card.Body>
                        <Card.Text>
                        {/* <button style={{display : 'block',backgroundColor : "blueviolet",borderRadius : "10px",fontWeight : "bolder"}}>View Products</button> */}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Header style={{color : "blueviolet"}}>Kids Toys</Card.Header>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2013/07/12/12/15/child-145411_960_720.png" />
                        <Card.Body>
                        <Card.Text>
                            {/* <button style={{display : 'block',backgroundColor : "blueviolet",borderRadius : "10px",fontWeight : "bolder"}}>View Products</button> */}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Header style={{color : "blueviolet"}}>Travel Products</Card.Header>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/12/08/00/36/luggage-1081872_960_720.jpg" />
                        <Card.Body>
                        <Card.Text>
                            {/* <button style={{display : 'block',backgroundColor : "blueviolet",borderRadius : "10px",fontWeight : "bolder"}}>View Products</button> */}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                </>
        );
}