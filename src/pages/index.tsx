import { Link, PageProps } from "gatsby"
import React, { ReactElement } from "react"
import AgendaSection from "../components/Agenda/AgendaSection"
import { H1 } from "../components/typography/typography"
import Layout from "../layout/Layout"
import Card from "../components/common/Card/Card"
import SpeakerSection from "../components/Speaker/SpeakerSection"
interface Props {}

function index({}: PageProps<Props>): ReactElement {
  return (
    <Layout pageTitle="Index" pageDescription="GDG Algiers' Devfest20 Website">
      <H1 className="text-blue">Hello in index page</H1>
      <p>
        <Link to="/example" className="no-underline hover:text-blue">
          Go to example page
        </Link>
      </p>
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
    </Layout>
  )
}

export default index
