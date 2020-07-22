import React, { Component } from "react";
import Input from './common/input';

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
      e.preventDefault();
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
                <Input
                    name='username'
                    value={account.username}
                    label='Username'
                    onChange={this.handleChange}
                />
                <Input
                    name='password'
                    value={account.password}
                    label='Password'
                    onChange={this.handleChange}
                />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
