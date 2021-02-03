import React from "react";
import ContactForm from "./ContactForm";
import {MDBRow, MDBCol, MDBContainer} from "mdbreact"
import NavOffset from "./NavOffset";

export default class ContactMeSection extends React.PureComponent {

  render() {
    return (
      <MDBContainer className={"border-bottom pb-md-4 f-view"} fluid>
        <NavOffset id={"contact-me"}/>
        <h1 className={"text-center text-strong mb-3"}>Contact Me</h1>
        <MDBRow center>
          <MDBCol size={"12"} md={"8"}>
            <ContactForm/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}