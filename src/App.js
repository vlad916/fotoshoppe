import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from './components/products';
import ProductsForm from './components/productsForm';
import Navbar from './components/navbar';
import LoginForm from './components/loginForm';
import NotFound from './components/notFound';

import './App.css';

function App() {
  return (
    <React.Fragment>
    <Navbar />
      <main className="container-fluid text-center mt-5">
        <Switch>
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
