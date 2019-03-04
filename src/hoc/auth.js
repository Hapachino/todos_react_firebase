import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (WrappedComponent, to = '/signin', redirect = false) => {
  class Auth extends Component {
    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    checkAuth() {
      const { auth, history } = this.props;

      if (auth === redirect) {
        history.push(to);
      } else {
        return true;
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return connect(mapStateToProps)(Auth);
}

const mapStateToProps = state => ({
  auth: state.users.auth,
  firstName: state.users.firstName,
  lastName: state.users.lastName,
});
