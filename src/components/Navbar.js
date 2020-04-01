import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaUserPlus } from "react-icons/fa";

import logo from "../logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="Navbar Logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Customers
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav align-items-center ml-auto">
          <li className="nav-item ml-5">
            <Link to="/add-customer" className="nav-link">
              <FaUserPlus /> Add Customer
            </Link>
          </li>
        </ul>
      </NavbarWrapper>
    );
  }
}

const NavbarWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`;
