import React from 'react'
import { Toolbar, NavItem } from 'rebass'
import { IndexLinkContainer } from 'react-router-bootstrap'

const Nav = () =>
  <Toolbar>
    <IndexLinkContainer to="/">
      <NavItem>Fitfam</NavItem>
    </IndexLinkContainer>
  </Toolbar>

export default Nav
