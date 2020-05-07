import React from 'react'
import {MDBAnimation, MDBCol, MDBMask, MDBRow} from 'mdbreact'
import PictureCard from './PictureCard'
import ContactForm from "./ContactForm";

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
          <MDBRow className="h-100" around>
            <MDBCol size={"10"} sm={"8"} md={"5"} lg={"4"} xl={"3"} className="mt-5 pt-3 pt-md-5 mb-5 white-text text-center text-md-left">
              <MDBAnimation delay={"0.2"} type={"fadeInLeft"}>
                <PictureCard/>
              </MDBAnimation>
            </MDBCol>
            <MDBCol size={"10"} sm={"8"} md={"6"} xl={"5"} className="mt-md-5  pt-md-5">
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

