import React from "react"
import {MDBCol, MDBContainer, MDBRow} from 'mdbreact'
import LanguageCard from './LanguageCard'
import NavOffset from '../NavOffset'

class LanguageSection extends React.PureComponent {

  render() {
    return (
      <>
        <MDBContainer className={"border-bottom pb-md-4"} fluid>
          <NavOffset id={"programming-languages"}/>
          <h1 className={"text-center text-strong mb-5"}>Programing Languages</h1>
          <MDBRow center>
            <MDBCol size={"6"} sm={"4"} md={"3"} lg={"2"}>
              <LanguageCard imageSrc={"/p-languages/javascript.svg"} name={"JS"}/>
            </MDBCol>
            <MDBCol size={"6"} sm={"4"} md={"3"} lg={"2"}>
              <LanguageCard imageSrc={'/p-languages/python.svg'} name={"Python"}/>
            </MDBCol>
            <MDBCol size={"6"} sm={"4"} md={"3"} lg={"2"}>
              <LanguageCard imageSrc={"/p-languages/c.svg"} name={"C"}/>
            </MDBCol>
            <MDBCol size={"6"} sm={"4"} md={"3"} lg={"2"}>
              <LanguageCard imageSrc={"/p-languages/c-plus-plus.svg"} name={"C++"}/>
            </MDBCol>
            <MDBCol size={"6"} sm={"4"} md={"3"} lg={"2"}>
              <LanguageCard imageSrc={"p-languages/lua.svg"} name={"Lua"}/>
            </MDBCol>
            <MDBCol size={"6"} sm={"4"} md={"3"} lg={"2"}>
              <LanguageCard imageSrc={"p-languages/java.svg"} name={"Java"}/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
}

export default LanguageSection