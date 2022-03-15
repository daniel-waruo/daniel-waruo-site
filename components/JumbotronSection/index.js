import React from 'react'
import {MDBCard, MDBCardBody, MDBContainer} from 'mdbreact'

export default () => {
  const backgroundStyle = {
    backgroundImage: "url('/bg-portfolio.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed"
  };

  return (
    <div className="mt-5 my-auto">
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
    </div>

  )
}

