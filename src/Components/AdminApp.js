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
import ContactUs from './ContactUs'
import AdminProducts  from './AdminProducts'


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
        </Container>

        <hr />

        <Switch>
          
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Products">
              <AdminProducts />
            </Route>
            <Route path="/Contact">
              <ContactUs />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}
