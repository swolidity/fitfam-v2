import React, { Component, PropTypes } from 'react'

class Login extends Component {

  render() {
    return (
      <div className="clearfix">
        <div className="col-4 mx-auto">
          <input type="text" ref="username" placeholder="username" className="col-12 block mb1 field"/>
          <input type="password" ref="password" placeholder="password" className="col-12 block mb1 field" />
          <button className="btn btn-primary" onClick={this._handleClick}>
            Login
          </button>
        </div>
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
  };

}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

export default Login
