import React from "react"
import {MDBCol, MDBContainer, MDBRow} from 'mdbreact'
import ProjectCard from './ProjectCard'
import NavOffset from '../NavOffset'


class ProjectSection extends React.PureComponent {

  render() {
    return (
      <>
        <MDBContainer className={"border-bottom pb-md-4"} fluid>
          <NavOffset id={"projects"}/>
          <h1 className={"text-center text-strong mb-5"}>Projects</h1>
          <MDBRow center>
            <MDBCol size={"12"} md={"6"} lg={"4"}>
              <ProjectCard>{{
                name: "Product Giving ",
                goal: "To allow users to donate goods instead of money to increase trust in donating campaigns",
                images: [1, 2, 3, 4, 5, 6].map(num => `/projects/product-giving/${num}.png`),
                tools: ['django', 'next-js', 'react', 'graph-ql', 'apollo'].map(frameW => `/tools/${frameW}.svg`),
                deliverables: ['Website', 'API', 'Database'],
                website: "https://www.productgiving.org",
                logo: '/projects/product-giving/logo.jpeg'
              }}
              </ProjectCard>
            </MDBCol>
            <MDBCol size={"12"} md={"6"} lg={"4"}>
              <ProjectCard>{{
                name: "Sprint I Connect",
                goal: "To allow ISP's to manage their customers subscriptions while allowing client to pay for them.",
                images: [1, 2, 3, 4, 5, 6].map(num => `/projects/sprint/${num}.png`),
                tools: ['django', 'next-js', 'react'].map(frameW => `/tools/${frameW}.svg`),
                deliverables: ['Website', 'API', 'Database'],
                website: "https://subscribe.makinika.com",
                logo: '/projects/sprint/logo.png'
              }}
              </ProjectCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
}

export default ProjectSection
