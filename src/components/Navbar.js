import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../action';

const signInLinks = [
  {
    to: '/signout',
    text: 'Sign Out',
  }
];

const signOutLinks = [
  {
    to: '/signup',
    text: 'Sign Up',
  },
  {
    to: '/signin',
    text: 'Sign In'
  }
];

class Navbar extends Component {
  renderLinks = (links) => {
    return links.map(link => {
      const { to, text } = link;

      return (
        <li key={to}>
          <NavLink to={to}>{text}</NavLink>
        </li>
      );
    });
  };

  signOutElement = () => {
    return (
      <li key="/sign-out">
        <button onClick={this.props.signOut} className="btn blue lighten-2">Sign Out</button>
      </li>
    );
  }

  render() {
    const { auth } = this.props;
    const { renderLinks, signOutElement } = this;
    
    return (
      <nav className="nav-wrapper blue lighten-2">
        <div className="container">
          <Link to="/" className="brand-logo">Do It</Link>
          <ul className="right">
            {auth ? [...(renderLinks(signInLinks)), signOutElement()]: renderLinks(signOutLinks)}
          </ul>
        </div>
      </nav>
    );
  }
}



const mapStateToProps = state => {
  return {
    auth: state.users.auth,
  };
}

export default connect(mapStateToProps, {
  signOut,
})(Navbar);
