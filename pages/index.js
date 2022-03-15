import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import {MDBAnimation, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import PictureCard from "../components/JumbotronSection/PictureCard";
import JumbotronSection from "../components/JumbotronSection";
import ProjectSection from "../components/ProjectSection";
import LanguageSection from "../components/LanguageSection";
import AttributionSection from "../components/AttributionSection";
import NavOffset from "../components/NavOffset";

export default () => (
  <>
    <MDBCol
      size={"12"}
      md={"4"}
      top={0}
      style={{
        top: "100px",
        left: 0,
        position: "fixed"
      }}
      className="mt-5 pt-0 mb-5 white-text text-center">
      <MDBAnimation delay={"0.2"} type={"fadeInLeft"}>
        <PictureCard/>
      </MDBAnimation>
    </MDBCol>
    <div className={"overflow-hidden"} >
      <Head>
        <title>Daniel Waruo - Software Engineer</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <NavBar/>
      <NavOffset/>
      <MDBRow end style={{position: "relative", top: 0}}>
        <MDBCol size={"12"} md={"8"}>
          <NavOffset/>
          <JumbotronSection/>
          <MDBContainer>
            <ProjectSection/>
            <LanguageSection/>
          </MDBContainer>
          <AttributionSection/>
        </MDBCol>
      </MDBRow>
    </div>
  </>
)

