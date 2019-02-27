import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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

export default props => {
  return (
    <nav className="nav-wrapper blue lighten-2">
      <div className="container">
        <Link to="/" className="brand-logo">Do It</Link>
        {renderLinks(signInLinks)}
        {renderLinks(signOutLinks)}
      </div>
    </nav>
  );
}
