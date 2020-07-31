import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from './components/products';
import Navbar from './components/navbar';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import NotFound from './components/notFound';
import Logout from "./components/logout";
import auth from "./services/authService";
import ShoppingCart from './components/shoppingCart';

import './App.css';

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <Navbar user={user} />
        <main className="container-fluid mt-5">
          <Switch>
            <Route path="/cart" component={ShoppingCart}></Route>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/logout" component={Logout} />
            <Route path="/products" component={Products}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/products" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
