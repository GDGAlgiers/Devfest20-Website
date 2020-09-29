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
      <AgendaSection></AgendaSection>
      <SpeakerSection
        speakers={[
          {
            speakerName: "John Doe",
            speakerField: "Software Engineer",
            talkName: "Title of Talk 1",
            imageSpeaker: "speaker.jpg",
            topBarColor: "bg-green",
          },
          {
            speakerName: "John Doe",
            speakerField: "Software Engineer",
            talkName: "Title of Talk 2",
            imageSpeaker: "test.jpg",
            topBarColor: "bg-yellow",
          },
          {
            speakerName: "John Doe",
            speakerField: "Software Engineer",
            talkName: "Title of Talk 3",
            imageSpeaker: "speaker.jpg",
            topBarColor: "bg-blue",
          },
          {
            speakerName: "John Doe",
            speakerField: "Software Engineer",
            talkName: "Title of Talk 4",
            imageSpeaker: "speaker.jpg",
            topBarColor: "bg-white",
          },
          {
            speakerName: "John Doe",
            speakerField: "Software Engineer",
            talkName: "Title of Talk 5",
            imageSpeaker: "test.jpg",
            topBarColor: "bg-gray",
          },
          {
            speakerName: "John Doe",
            speakerField: "Software Engineer",
            talkName: "Title of Talk 6",
            imageSpeaker: "speaker.jpg",
            topBarColor: "bg-yellow",
          },
          {
            speakerName: "John Doe",
            speakerField: "Software Engineer",
            talkName: "Title of Talk 7",
            imageSpeaker: "test.jpg",
            topBarColor: "bg-nightBlue",
          },
          {
            speakerName: "John Doe",
            speakerField: "Software Engineer",
            talkName: "Title of Talk 8",
            imageSpeaker: "speaker.jpg",
            topBarColor: "bg-red",
          },
        ]}
      ></SpeakerSection>
      <ChallengesSection></ChallengesSection>
    </Layout>
  )
}

export default index
