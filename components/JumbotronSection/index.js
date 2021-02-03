import React from 'react'
import {MDBAnimation, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBMask, MDBRow} from 'mdbreact'
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
    <div className={"overflow-hidden"} >
      <MDBAnimation type={"fadeIn"}>
        <div className={"view f-view"}>
          <MDBMask overlay={""} className="flex-center">
          </MDBMask>
          <MDBRow className="h-100 mx-2" center>
            <MDBCol size={"12"} sm={"8"} md={"5"} lg={"4"}
                    className="mt-5 pt-3 pt-md-5 mb-5 white-text text-center">
              <MDBAnimation delay={"0.2"} type={"fadeInLeft"}>
                <PictureCard/>
              </MDBAnimation>
            </MDBCol>
            <MDBCol size={"12"} sm={"8"} md={"7"} lg={"8"}
                    className="mt-5 pt-3 pt-md-5 my-auto">
              <MDBCard className={" py-1 z-depth-0"}>
                <h1 className={"text-center"}>ABOUT ME</h1>
                <MDBCardBody tag={"p"} style={{fontSize: "1rem"}}>
                  I am a 3rd year student in the university pursuing a degree in Software Engineering.
                  I love technology and the endless potential it has to solve problems and generate income
                  <hr/>
                  I am outgoing, hardworking and self-driven .
                  Traits of which have allowed me to engage in several self initialized projects
                  throughout my time in the university and in the process developed my project management ,
                  time management and stress management skills.
                  <hr/>
                  I love learning new things.I recently started learning spanish and through this I have gained
                  new friends as well as a whole new aspect of the world.I believe I am a global citizen and use
                  wake up everyday to make this world a smaller place through the code I write.
                  <hr/>
                  I looking forward with partnering with you on your next technology project.I mainly build web
                  applications using tools such
                  as Django(Python Web Framework) and React JS(Javascript UI Framework) but I am very flexible as
                  I can also use NodeJS , Word Press and legacy HTML to develop websites.
                  <hr/>
                  Feel free to contact me at anytime through my mobile (+254 797792447) or email (waruodaniel@gmail.com)
                  or send me a letter though the contact form or chat with me on the online messenger on the bottom left of the screen.
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBAnimation>
    </div>
  )
}

