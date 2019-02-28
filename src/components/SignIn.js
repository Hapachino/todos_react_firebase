import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../firebase';

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
    const { email, password } = this.state;

    auth.signInWithEmailAndPassword(email, password)
        .then(user => {
          this.props.history.push('/');
          console.log(user);
        })
        .catch(error => {
          this.setState({ error: error });

          console.log(error);
        });
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

export default SignIn;
