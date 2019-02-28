import React from 'react';
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

const renderLinks = (links) => {
  const outputLinks = links.map(link => {
    const { to, text } = link;

    return (
      <li key={to}>
        <NavLink to={to}>{text}</NavLink>
      </li>
    );
  });

  return (
    <ul className="right">
      {outputLinks}
    </ul>
  );
}

const Navbar = props => {
  const { auth } = props;
  console.log(auth);
  return (
    <nav className="nav-wrapper blue lighten-2">
      <div className="container">
        <Link to="/" className="brand-logo">Do It</Link>
        {auth ? renderLinks(signInLinks) : renderLinks(signOutLinks)}
      </div>
    </nav>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.users.auth,
  };
}

export default connect(mapStateToProps, {
  signOut,
})(Navbar);
