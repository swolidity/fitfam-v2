import React, { PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'

require('./Navbar.css')

const Navbar = ({ dispatch, isAuthenticated, errorMessage}) =>
  <div className="Navbar clearfix bg-white">
    <div className="sm-col">
      <IndexLink to="/" className="brand btn py2">FITFAM</IndexLink>
    </div>

    <div className="sm-col-right">
      <Link to="#" className="btn py2">login</Link>
    </div>
  </div>

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

export default Navbar
