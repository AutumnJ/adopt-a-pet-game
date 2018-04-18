import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// import '../App.css'; STYLE NAVBAR?

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid #C5CBE3', paddingBottom: '10px', marginBottom: '12px' }}>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand id="nav-header">
             <NavLink to="/">
              Home
            </NavLink>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}>
            <NavLink to="/cats">
              Cats
            </NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem eventKey={1}>
            <NavLink to="/randompet">
              Random Pet
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;

        