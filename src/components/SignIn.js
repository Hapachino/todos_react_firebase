import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../action';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  }

  handleTextChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.signIn(this.state);
  };

  render() {
    const { handleSubmit, handleTextChange } = this;
    
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleTextChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleTextChange} />
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1">
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  signIn,
})(SignIn);
