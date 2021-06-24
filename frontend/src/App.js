import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Footer from "./components/Footer.js";
import { Container } from "react-bootstrap";
import "./index.css";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import CartScreen from "./screens/CartScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import ShippingScreen from "./screens/ShippingScreen.js";
import PaymentScreen from "./screens/PaymentScreen.js";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";
import OrderScreen from "./screens/OrderScreen.js";
import UserListScreen from "./screens/UserListScreen.js";
import OrderListScreen from "./screens/OrderListScreen.js";
import ProductListScreen from "./screens/ProductListScreen.js";
import UserEditScreen from "./screens/UserEditScreen.js";
import ProductEditScreen from "./screens/ProductEditScreen.js";
import TestComponent from './components/Test.js'
// import Header from "./components/Header.js";

const App = () => {
  return (
    <Router>
      <TestComponent />
      {/* <Header /> */}
      <TestScreen />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/admin/productlist" component={ProductListScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
        </Container>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;


//  import React from 'react'
 
//  const App = () => {
//    return (
//      <Router>
//        {/* <h1>Hello World</h1> */}
//       <Route path="/" component={HomeScreen} exact />
//      </Router>
//    )
//  }
 
//  export default App
 