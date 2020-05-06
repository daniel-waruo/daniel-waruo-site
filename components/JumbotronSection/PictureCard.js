import React from 'react'
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow} from 'mdbreact'

export default () => (
  <MDBCard color={"bg-transparent"} className={"z-depth-0 mt-sm-5 mt-md-0"}>
    <MDBRow center>
      <MDBCol size={"12"} sm={"10"} xl={"8"}>
        <MDBCardImage overlay={"transparent"} className="img-fluid rounded-circle" src={'/cartoonMe.jpeg'} waves/>
      </MDBCol>
    </MDBRow>
    <MDBCardBody className={"white-text text-center"}>
      <MDBCardTitle>Daniel W. King'ang'ai</MDBCardTitle>
      <MDBCardText className={"white-text"}>Software Engineer</MDBCardText>
      <MDBCardText className={"white-text"}>Email: waruodaniel@gmail.com</MDBCardText>
      <MDBCardText className={"white-text"}>Phone Number : +254797792447</MDBCardText>
    </MDBCardBody>
  </MDBCard>
);
