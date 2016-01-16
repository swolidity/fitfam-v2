import React from 'react'
import { Toolbar, NavItem } from 'rebass'
import { IndexLinkContainer } from 'react-router-bootstrap'

require('./Nav.css')

const Nav = () =>
  <div className="Nav">
    <Toolbar color="white">
      <IndexLinkContainer to="/">
        <NavItem><span className="brand">FITFAM</span></NavItem>
      </IndexLinkContainer>
    </Toolbar>
  </div>

export default Nav
