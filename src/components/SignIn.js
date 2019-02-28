import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleTextChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { handleTextChange } = this;

    return (
      <div className="container">
        <form>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleTextChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleTextChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
