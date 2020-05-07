import React from 'react'
import {
  MDBAnimation,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBIcon,
  MDBRow
} from 'mdbreact'

export default () => (
  <MDBCard className={"h-100"}>
    <MDBRow center>
      <MDBCol size={"8"} sm={"6"}>
        <MDBCardImage overlay={"transparent"} className="img-fluid rounded-circle" src={'/cartoonMe.jpeg'}
                      alt={"Picture of Daniel Waruo King'ang'ai"} waves zoom/>
      </MDBCol>
    </MDBRow>
    <MDBCardBody className={"text-dark bg-white"}>
      <MDBCardTitle className={"text-center"}>Daniel Waruo King'ang'ai</MDBCardTitle>
      <MDBCardText className={"text-center"}>Software Engineer | Python Develeoper </MDBCardText>
      <MDBCardText className={"ml-3 ml-sm-1"}>
        <MDBIcon icon={"envelope"} className={"mx-2 black-text"}/>
        waruodaniel@gmail.com
      </MDBCardText>
      <MDBCardText className={"ml-3 ml-sm-1"}>
        <MDBIcon icon={"mobile-alt"} className={"mx-2 black-text"}/>
        +254797792447
      </MDBCardText>
      <MDBRow center>
        <MDBCol>
          <MDBAnimation type={"fadeInLeft"} delay={'0.2s'}>
            <MDBBtn tag="a" size="sm" className={"btn-floating"} target={'_blank'}
                    href={"https://github.com/daniel-waruo"} color={"dark"}>
              <MDBIcon fab icon="github"/>
            </MDBBtn>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation type={"fadeInUp"} delay={'0.4s'}>
            <MDBBtn tag="a" size="sm" className={"btn-floating"} target={'_blank'}
                    href={"https://www.linkedin.com/in/daniel-waruo/"} color={"blue darker-4"}>
              <MDBIcon fab icon="linkedin-in"/>
            </MDBBtn>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation type={"fadeInRight"} delay={'0.6s'}>
            <MDBBtn tag="a" size="sm" className={"btn-floating"} target={'_blank'}
                    href={"https://www.instagram.com/dan.waruo/"} gradient={"purple"}>
              <MDBIcon fab icon="instagram"/>
            </MDBBtn>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBCardBody>
  </MDBCard>
);
