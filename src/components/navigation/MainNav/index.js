import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const MainNavbar = styled(Navbar)`
  .nav-item {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <MainNavbar color="dark" dark expand="md" className="">
          <NavbarBrand tag={NavLink} to="/" className="p-0" />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  exact
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to="/about"
                  className="nav-link"
                  activeClassName="active"
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to="/product"
                  className="nav-link"
                  activeClassName="active"
                >
                  Product
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to="/contact"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </MainNavbar>
      </div>
    );
  }
}

export default MainNav;
