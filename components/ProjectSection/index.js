import React from "react"
import {MDBCol, MDBContainer, MDBRow} from 'mdbreact'
import ProjectCard from './ProjectCard'
import NavOffset from '../NavOffset'


class FrameWorkSection extends React.PureComponent {

  render() {
    return (
      <>
        <MDBContainer className={"border-bottom pb-md-4"} fluid>
          <NavOffset id={"projects"}/>
          <h1 className={"text-center text-strong mb-5"}>Projects</h1>
          <MDBRow center>
            <MDBCol size={"12"} md={"6"} lg={"4"}>
              <ProjectCard>{{
                name: "Next JS E-commerce",
                goal:"To create a modern highly interactive e-commerce website",
                images: [1, 2, 3, 4, 5, 6, 7].map(num => `/projects/next-js/${num}.jpg`),
                languageImages: ['python', 'javascript', 'html', 'css'].map(lang => `/p-languages/${lang}.svg`),
                frameworkImages: ['django','next-js', 'react'].map(frameW => `/p-frameworks/${frameW}.svg`),
                deliverables: ['Website', 'API', 'Database'],
                githubRepository :'https://github.com/daniel-waruo/next-js-e-commerse'
              }}
              </ProjectCard>
            </MDBCol>
            <MDBCol size={"12"} md={"6"} lg={"4"}>
              <ProjectCard>{{
                name: "Pong AI",
                goal:"To create a version of the 1972 pong game with my own AI player",
                images: [1, 2, 3].map(num => `/projects/pong/${num}.png`),
                languageImages: ['lua'].map(lang => `/p-languages/${lang}.svg`),
                frameworkImages: [],
                deliverables: ['Desktop Game Application'],
                githubRepository:'https://github.com/daniel-waruo/pong-ai'
              }}
              </ProjectCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
}

export default FrameWorkSection