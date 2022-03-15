import React from 'react'
import {MDBAnimation, MDBCard, MDBCardBody, MDBCol, MDBRow} from 'mdbreact'
import PictureCard from './PictureCard'

export default () => {
  const backgroundStyle = {
    backgroundImage: "url('/bg-portfolio.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed"
  };

  return (
    <div className={"overflow-hidden"}>
      <MDBAnimation type={"fadeIn"}>
        <MDBRow className="h-100 mx-2" center>
          <MDBCol size={"12"} sm={"8"} md={"5"} lg={"4"}
                  className="mt-5 pt-3 pt-md-5 mb-5 white-text text-center">
            <MDBAnimation delay={"0.2"} type={"fadeInLeft"}>
              <PictureCard/>
            </MDBAnimation>
          </MDBCol>
          <MDBCol size={"12"} sm={"8"} md={"7"} lg={"8"} className="mt-5 pt-3 pt-md-5 my-auto">
            <MDBCard className={" py-1 z-depth-0"}>
              <h1 className={"text-center"}>Who is Daniel ?</h1>
              <MDBCardBody tag={"p"} style={{fontSize: "1rem"}}>
                Daniel is a software developer with 2 years of experience in software development, with a demonstrated
                history of working in the information technology and services industry. He has a passion for technology
                and its capacity to bring positive change in his community thus constantly experimenting with new
                technologies and techniques. In his spare time, he is busy writing songs, walking on runways, and
                exploring forests while riding his bike.
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBAnimation>
    </div>
  )
}

