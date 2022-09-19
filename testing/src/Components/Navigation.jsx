import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Modal from "./Modal";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Modal5 from "./Modal5";

import Logo from "./Asserts/Logo2.svg";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand>
            {/* <img className="Logo" src={Logo} alt="Logo" /> */}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <ol>
                  <li>
                    <Modal />
                  </li>
                  <li>
                    <Modal2 />
                  </li>
                  <li>
                    <Modal3 />
                  </li>
                  <li>
                    <Modal4 />
                  </li>
                  <li>
                    <Modal5 />
                  </li>
                </ol>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
