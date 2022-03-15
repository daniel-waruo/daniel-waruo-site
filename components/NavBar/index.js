import React, {Component} from "react";
import {
  MDBBtn,
  MDBCollapse,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem
} from "mdbreact";

export default class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {
    return (
      <MDBNavbar color={"white"} className={"z-depth-0"} light expand="lg" fixed={"top"} >
        <MDBNavbarBrand>
          Daniel W. King'ang'ai
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse}/>
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem className={"nav-item-mobile"}>
              <a className={"nav-link mt-4 waves-effect waves-light"} href={"#"}>
                <MDBIcon icon="home" className="mr-1"/>
                Home
              </a>
            </MDBNavItem>
            <MDBNavItem className={"nav-item-mobile"}>
              <a className={"nav-link mt-4 waves-effect waves-light"} href={"#projects"}>
                <MDBIcon icon="code" className="mr-1"/>
                Projects
              </a>
            </MDBNavItem>
            <MDBNavItem className={"nav-item-mobile"}>
              <a className={"nav-link mt-4 waves-effect waves-light"} href={"#tools"}>
                <MDBIcon icon="code" className="mr-1"/>
                Tools
              </a>
            </MDBNavItem>
            <MDBNavItem className={"nav-item-mobile"}>
              <a href="tel:+254797792447" className={"nav-link pt-3 waves-effect waves-light"}>
                <MDBBtn className={"rounded-pill px-3"} color={"indigo"} >
                  <MDBIcon icon="mobile-alt" className="mr-1"/> Call Me (+254797792447)
                </MDBBtn>
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
