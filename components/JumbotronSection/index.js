import React from 'react'
import {MDBAnimation, MDBCol, MDBMask, MDBRow} from 'mdbreact'
import PictureCard from './PictureCard'
import ContactForm from './ContactForm'

export default () => {
  const backgroundStyle = {
    backgroundImage: "url('/bg-portfolio.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed"
  };

  return (
    <div className={"overflow-hidden"} style={backgroundStyle}>
      <MDBAnimation type={"fadeIn"}>
        <div className={"view f-view"}>
          <MDBMask overlay={"indigo-strong"} className="flex-center">
          </MDBMask>
          <MDBRow className="pt-lg-5 mt-lg-5 h-100" around>
            <MDBCol size={"8"} sm={"6"} md={"3"} className="mb-5 mt-md-0 mt-5 white-text text-center text-md-left">
              <MDBAnimation delay={"0.3"} type={"fadeInLeft"}>
                <PictureCard/>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md={"6"} xl={"5"} className="mb-4">
              <MDBAnimation type={"fadeInRight"} delay={"0.3s"}>
                <ContactForm/>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBAnimation>
    </div>
  )
}

