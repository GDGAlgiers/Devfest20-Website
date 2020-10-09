import { PageProps } from "gatsby"
import React, { ReactElement } from "react"
import AgendaSection from "../components/Agenda/AgendaSection"
import ChallengesSection from "../components/ChallengesComponents/ChallengesSection"
import Layout from "../layout/Layout"
import SpeakerSection from "../components/Speaker/SpeakerSection"
import AboutSection from "../components/About/AboutSection"
import HeroSection from "../components/Hero"
interface Props {}

function index(props: PageProps<Props>): ReactElement {
  return (
    <Layout
      seo={{
        title: "Index",
        description: "Index page of devfest20 by GDG Algiers",
      }}
    >
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
    </Layout>
  )
}

export default index
