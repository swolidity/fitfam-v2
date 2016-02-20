import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Login from '../../components/Login'
import { loginUser } from '../../constants/ActionTypes'

class LoginPage extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props

    if (isAuthenticated) {
      return (
        <p>You are already logged in.</p>
      )
    }

    return (
      <Login
        errorMessage={errorMessage}
        onLoginClick={ creds => dispatch(loginUser(creds)) }
      />
    )
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {
  const { auth } = state
  const { isAuthenticated, errorMessage } = auth

  return {
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(LoginPage)
