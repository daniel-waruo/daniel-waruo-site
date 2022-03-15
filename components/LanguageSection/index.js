import React from "react"
import {MDBCol, MDBContainer, MDBRow} from 'mdbreact'
import LanguageCard from './LanguageCard'
import NavOffset from '../NavOffset'

const tools = [
  {
    name: "JS",
    logo: "javascript.svg"
  },
  {
    name: "TypeScript",
    logo: "typescript.svg"
  },
  {
    name: "Graph Ql",
    logo: "graph-ql.svg"
  },
  {
    name: "React JS",
    logo: "react.svg"
  },
  {
    name: "Adonis JS",
    logo: "adonis.svg"
  },
  {
    name: "Express JS",
    logo: "express.svg"
  },
  {
    name: "Next JS",
    logo: "next-js.svg"
  },
  {
    name: "Python",
    logo: "python.svg"
  },
  {
    name: "Django",
    logo: "django.svg"
  },
  {
    name: "Flask",
    logo: "flask.svg"
  },

  {
    name: "C",
    logo: "c.svg"
  },
  {
    name: "C++",
    logo: "c-plus-plus.svg"
  },
  {
    name: "Lua",
    logo: "lua.svg"
  },
  {
    name: "Java",
    logo: "java.svg"
  },

]

class LanguageSection extends React.PureComponent {

  render() {
    return (
      <MDBRow center>
        <MDBCol size={"12"} md={"12"} >
          <MDBContainer className={"border-bottom pb-md-4"} fluid>
            <NavOffset id={"tools"}/>
            <h1 className={"text-center text-strong mb-5"}>His Tools ?</h1>
            <MDBRow center>
              {tools.map(
                ({logo, name}, key) => {
                  return (
                    <MDBCol size={"6"} md={"2"} key={key}
                            className={"px-1"}>
                      <LanguageCard imageSrc={`/tools/${logo}`} name={name}/>
                    </MDBCol>)
                }
              )}
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    )
  }
}

export default LanguageSection
