import React from 'react'
import { IndexLink, Link } from 'react-router'

require('./Nav.css')

const Nav = () =>
  <nav className="Nav clearfix bg-white">
    <div className="sm-col">
      <IndexLink to="/" className="brand btn py2">FITFAM</IndexLink>
    </div>

    <div className="sm-col-right">
      <Link to="#" className="btn py2">login</Link>
    </div>
  </nav>

export default Nav
