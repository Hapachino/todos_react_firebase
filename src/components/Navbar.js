import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../action';

const signInLinks = [

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
      <li key="/signout">
        <button onClick={this.props.signOut} className="btn blue ">Sign Out</button>
      </li>
    );
  }

  profileElement = () => {
    const { firstName, lastName } = this.props;
    const initials = firstName[0] + lastName[0];
    
    return (
      <li key="/">
        <button style={{ margin: '0 10px'}} className="btn btn-floating blue">{initials}</button>
      </li>
    );
  }

  render() {
    const { auth } = this.props;
    const { profileElement, renderLinks, signOutElement } = this;
    
    return (
      <nav className="nav-wrapper blue lighten-2">
        <div className="container">
          <Link to="/" className="brand-logo">todos</Link>
          <ul className="right">
            {auth ? [...(renderLinks(signInLinks)), signOutElement(), profileElement()]: renderLinks(signOutLinks)}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  const { auth, firstName, lastName } = state.users;

  return {
    auth,
    firstName,
    lastName,
  };
}

export default connect(mapStateToProps, {
  signOut,
})(Navbar);
