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
  <MDBCard className={"h-100 z-depth-0"}>
    <MDBRow center>
      <MDBCol size={"8"} >
        <MDBCardImage overlay={"transparent"} className="img-fluid rounded-circle" src={'/cartoonMe.jpg'}
                      alt={"Picture of Daniel Waruo King'ang'ai"} waves zoom/>
      </MDBCol>
    </MDBRow>
    <MDBCardBody>
      <MDBCardTitle className={"text-center text-dark"}>Daniel Waruo King'ang'ai</MDBCardTitle>
      <MDBCardText className={"text-center"}>Software Engineer | Python Develeoper </MDBCardText>
      <MDBCardText className={"ml-3 ml-sm-1"}>
        <MDBIcon icon={"envelope"} className={"mx-2"}/>
        <a className={"text-muted"} href="mailto:waruodaniel@gmail.com">waruodaniel@gmail.com</a>
      </MDBCardText>
      <MDBCardText className={"ml-3 ml-sm-1"}>
        <MDBIcon icon={"mobile-alt"} className={"mx-2"}/>
        <a className={"text-muted"} href="tel:+254797792447">+254797792447</a>
      </MDBCardText>
      <MDBRow center>
        <MDBCol>
          <MDBAnimation type={"fadeInLeft"} delay={'0.2s'}>
            <MDBBtn tag="a" size="sm"
                    className={"btn-floating"}
                    target={'_blank'}
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
