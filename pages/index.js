import React from 'react'
import Head from 'next/head'
import LanguageSection from '../components/LanguageSection'
import FrameWorkSection from '../components/FrameWorkSection'
import AttributionSection from '../components/AttributionSection'
import ProjectSection from '../components/ProjectSection'
import JumbotronSection from '../components/JumbotronSection'
import NavBar from '../components/NavBar'

export default () => (
  <div className={"overflow-hidden"}>
    <Head>
      <title>Daniel Waruo - Software Engineer</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <NavBar/>
    <JumbotronSection/>
    <ProjectSection/>
    <LanguageSection/>
    <FrameWorkSection/>
    <AttributionSection/>
  </div>
)

