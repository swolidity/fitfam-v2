import React, { Component, PropTypes } from 'react'

class Login extends Component {

  render() {
    return (
      <div>
        <input type="text" ref="username" placeholder="username" />
        <input type="password" ref="password" placeholder="password" />
        <button onClick={this._handleClick}>
          Login
        </button>
      </div>
    )
  }

  _handleClick = () => {
    const username = this.refs.username
    const password = this.refs.password
    const creds = {
      username: username.value.trim(),
      password: password.value.trim()
    }

    this.props.onLoginClick(creds)
  }

}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

export default Login
