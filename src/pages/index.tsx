import { graphql, PageProps, useStaticQuery } from "gatsby"
import React, { ReactElement } from "react"
import AgendaSection from "../components/Agenda/AgendaSection"
import ChallengesSection from "../components/ChallengesComponents/ChallengesSection"
import Layout from "../layout/Layout"
import SpeakerSection from "../components/Speaker/SpeakerSection"
import AboutSection from "../components/About/AboutSection"
import HeroSection from "../components/Hero"
import SponsorSection from "../components/Sponsor/SponsorSection"
import { SeoProps } from "../layout/seo"
interface Props {}

const INDEX_SEO: SeoProps = {
  title: "Home",
  description:
    "GDG DevFests are large community-run developer events happening around the globe focused on community building and learning about Google’s technologies. We organize DevFest 2020 in its 8th edition to offer speaker sessions, codelabs, workshops and a fascinating development challenges in all fields.",
  openGraph: {
    url: "https://devfest20-gdgalgiers-1.netlify.app",
    title: "Devfest 20 Home",
    description: "Devfest20 event from GDG Algiers",
    images: [
      {
        url: "https://i.ibb.co/kQgBCJD/devfest-Card.png",
        width: 800,
        height: 600,
        alt: "devfest",
      },
    ],
    site_name: "Devfest20 GDG Algiers",
  },
}

function Index(props: PageProps<Props>): ReactElement {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )
  return (
    <Layout
      seo={{
        twitter: {
          handle: site.siteMetadata.author,
          cardType: "summary_large_image",
        },
        metaTags: [
          {
            property: "keywords",
            content: site.siteMetadata.keywords.join(","),
          },
        ],
        ...INDEX_SEO,
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
            imageSpeaker: "speakers/speaker.jpg",
            topBarColor: "bg-green",
          },
          {
            speakerName: "John Doe",
            speakerField: "Software Engineer",
            talkName: "Title of Talk 2",
            imageSpeaker: "speakers/speaker.jpg",
            topBarColor: "bg-yellow",
          },
          {
            speakerName: "John Doe",
            speakerField: "Software Engineer",
            talkName: "Title of Talk 3",
            imageSpeaker: "speakers/speaker.jpg",
            topBarColor: "bg-blue",
          },
          {
            speakerName: "John Doe",
            speakerField: "Software Engineer",
            talkName: "Title of Talk 4",
            imageSpeaker: "speakers/speaker.jpg",
            topBarColor: "bg-white",
          },
          {
            speakerName: "John Doe",
            speakerField: "Software Engineer",
            talkName: "Title of Talk 5",
            imageSpeaker: "speakers/speaker.jpg",
            topBarColor: "bg-gray",
          },
          {
            speakerName: "John Doe",
            speakerField: "Software Engineer",
            talkName: "Title of Talk 6",
            imageSpeaker: "speakers/speaker.jpg",
            topBarColor: "bg-yellow",
          },
          {
            speakerName: "John Doe",
            speakerField: "Software Engineer",
            talkName: "Title of Talk 7",
            imageSpeaker: "speakers/speaker.jpg",
            topBarColor: "bg-nightBlue",
          },
          {
            speakerName: "John Doe",
            speakerField: "Software Engineer",
            talkName: "Title of Talk 8",
            imageSpeaker: "speakers/speaker.jpg",
            topBarColor: "bg-red",
          },
        ]}
      ></SpeakerSection>
      <ChallengesSection></ChallengesSection>
      <SponsorSection
        sponsors={[
          {
            sponsorLogo: "speakers/speaker.jpg",
          },
          {
            sponsorLogo: "speakers/speaker.jpg",
          },
        ]}
      ></SponsorSection>
    </Layout>
  )
}

export default Index
