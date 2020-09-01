import React from "react";
import '../Styles/App.css'
import { Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home'
import Products from './Products'
import ContactUs from './ContactUs'
import Cart from './Cart'
// import AdminProducts  from './AdminProducts'
import MyOrders from './MyOrders'


export default function App() {
  return (

    <Router>
      <div>
        <Container className="flex-css">
          <div>
            <Link to="/" style = {{color : "blueViolet"}}>Home</Link>
          </div>
          <div>
            <Link to="/Products" style = {{color : "blueViolet"}}>Products</Link>
          </div>
          <div>
            <Link to="/Contact" style = {{color : "blueViolet"}}>Contact Us</Link>
          </div>
          <div>
            <Link to="/Cart" style = {{color : "blueViolet"}}>Cart</Link>
          </div>
          <div>
            <Link to="/MyOrders" style = {{color : "blueViolet"}}>MyOrders</Link>
          </div>
        </Container>

        <hr />

        <Switch>
          
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Products">
              <Products />
            </Route>
            <Route path="/Contact">
              <ContactUs />
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
            <Route path="/MyOrders">
              <MyOrders />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}
