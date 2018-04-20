import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <ul className="nav navbar-nav">
        <li>
          <NavLink to="/" id="home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/randompet">Random Pet</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;



        