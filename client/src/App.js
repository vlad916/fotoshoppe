import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from './components/products';
import ProductsForm from './components/productsForm';
import Navbar from './components/navbar';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import NotFound from './components/notFound';
import ShoppingCart from './components/shoppingCart';

import './App.css';

function App() {
  return (
    <React.Fragment>
    <Navbar />
      <main className="container-fluid mt-5">
        <Switch>
          <Route path='/cart' component={ShoppingCart}></Route>
          <Route path='/register' component={RegisterForm}></Route>
          <Route path='/login' component={LoginForm}></Route>
          <Route path='/products:id' component={ProductsForm}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from='/' exact to='/products' />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;