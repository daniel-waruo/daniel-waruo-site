import React from "react"
import {MDBCol, MDBContainer, MDBRow} from 'mdbreact'
import LanguageCard from './LanguageSection/LanguageCard'
import NavOffset from './NavOffset'

class FrameWorkSection extends React.PureComponent {

  render() {
    return (
      <>
        <MDBContainer className={"border-bottom pb-md-4 f-view"} fluid>
          <NavOffset id={"development-frameworks"}/>
          <h1 className={"text-center text-strong mb-5"}>Development Frameworks</h1>
          <MDBRow center>
            <MDBCol size={"6"} sm={"4"} md={"3"} lg={"2"}>
              <LanguageCard imageSrc={'/p-frameworks/django.svg'} name={"Django"}/>
            </MDBCol>
            <MDBCol size={"6"} sm={"4"} md={"3"} lg={"2"}>
              <LanguageCard imageSrc={"/p-frameworks/flask.svg"} name={"Flask"}/>
            </MDBCol>
            <MDBCol size={"6"} sm={"4"} md={"3"} lg={"2"}>
              <LanguageCard imageSrc={"/p-frameworks/react.svg"} name={"React JS"}/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
}

export default FrameWorkSection