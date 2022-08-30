import React, { Component } from 'react';
import Joi from 'joi-browser';

import Input from './common/Input';

class LoginForm extends Component {
  state = {
    account: { email: '', password: '' },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
  };

  validateForm(input, schema) {
    const options = { abortEarly: false };
    const { error } = Joi.validate(input, schema, options);
    const errors = {};
    if (error != null)
      for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm(this.state.account, this.schema);
    this.setState({ errors: errors || {} });
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    //setting state
    const account = { ...this.state.account };
    account[name] = value;
    this.setState({ account }, this.printState);
  };

  printState() {
    console.log(this.state.account);
  }

  render() {
    const { account, errors } = this.state;
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            label="Email"
            onChange={this.handleChange}
            value={account.email}
            error={errors?.email}
          />

          <Input
            name="password"
            label="Password"
            onChange={this.handleChange}
            value={account.password}
            error={errors?.password}
            // type="password"
          />

          <button className="btn btn-primary mt-2">Login</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
