import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../action';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    error: '',
  }

  handleTextChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit = e => {
    const { email, password, firstName, lastName } = this.state;

    e.preventDefault();

    if (!email || !password || !firstName || !lastName) {
      this.setState({
        error: 'Please enter all fields',
      });

      return;
    }

    this.props.signUp(this.state);
  };

  render() {
    const { state: { error }, handleSubmit, handleTextChange } = this;

    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleTextChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleTextChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={handleTextChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={handleTextChange} />
          </div>
          <p className="red-text">{error}</p>
          <div className="input-field">
            <button className="btn blue lighten-1">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  signUp,
})(SignUp);
