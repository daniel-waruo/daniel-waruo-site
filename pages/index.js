import React from 'react'
import Head from 'next/head'
import LanguageSection from '../components/LanguageSection'
import AttributionSection from '../components/AttributionSection'
import ProjectSection from '../components/ProjectSection'
import JumbotronSection from '../components/JumbotronSection'
import NavBar from '../components/NavBar'
import {MDBContainer} from "mdbreact";

export default () => (
  <div className={"overflow-hidden"}>
    <Head>
      <title>Daniel Waruo - Software Engineer</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <NavBar/>
    <JumbotronSection/>
    <MDBContainer>
      <ProjectSection/>
      <LanguageSection/>
    </MDBContainer>
    <AttributionSection/>
  </div>
)

