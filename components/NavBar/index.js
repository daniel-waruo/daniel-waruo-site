import React, {Component} from "react";
import {MDBCollapse, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem} from "mdbreact";

export default class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {
    return (
      <MDBNavbar color={"white"} light expand="lg" fixed={"top"} scrolling>
        <MDBNavbarBrand>
          Daniel W. King'ang'ai
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse}/>
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem className={"nav-item-mobile"}>
              <a className={"nav-link waves-effect waves-light"} href={"#"}>
                <MDBIcon icon="home" className="mr-1"/>
                Home
              </a>
            </MDBNavItem>
            <MDBNavItem className={"nav-item-mobile"}>
              <a className={"nav-link waves-effect waves-light"} href={"#contact-me"}>
                <MDBIcon far icon="envelope" className="mr-1"/>
                Contact Me
              </a>
            </MDBNavItem>
            <MDBNavItem className={"nav-item-mobile"}>
              <a className={"nav-link waves-effect waves-light"} href={"#projects"}>
                <MDBIcon icon="code" className="mr-1"/>
                Projects
              </a>
            </MDBNavItem>
            <MDBNavItem className={"nav-item-mobile"}>
              <a className={"nav-link waves-effect waves-light"} href={"#programming-languages"}>
                <MDBIcon icon="code" className="mr-1"/>
                Programming Languages
              </a>
            </MDBNavItem>
            <MDBNavItem className={"nav-item-mobile"}>
              <a className={"nav-link waves-effect waves-light"} href={"#development-frameworks"}>
                <MDBIcon icon="code" className="mr-1"/>
                Development Frameworks
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
