import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import _ from "lodash";
import './css/login.css';

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="container">
        <div className='login'>
        <h3 className='log'>Sign In</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Sign In")}
        </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
