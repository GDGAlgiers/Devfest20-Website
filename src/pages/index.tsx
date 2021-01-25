import { graphql, PageProps, useStaticQuery } from "gatsby"
import React, { ReactElement } from "react"
import AgendaSection from "../components/Agenda/AgendaSection"
import ChallengesSection from "../components/ChallengesComponents/ChallengesSection"
import Layout from "../layout/Layout"
import SpeakerSection from "../components/Speaker/SpeakerSection"
import AboutSection from "../components/About/AboutSection"
import HeroSection from "../components/Hero"
import SponsorSection from "../components/Sponsor/SponsorSection"
import FooterSection from "../components/Footer/FooterSection"
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
  console.log(`
  ***********************************************************************
  *                                                                     *
  *             This is definitely not the code part :)                  *
  *                       gdGhlICN3aD                                   *
  *                                                                     *
  ***********************************************************************
  `)
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
            speakerName: "Karim Beguir",
            speakerField:
              "Co-founder, CEO @InstaDeep, Google Machine Learning Developer Expert",
            talkName: "AI & Deep Tech Innovation in Africa",
            imageSpeaker: "speakers/karimbeguir.jpg",
            topBarColor: "bg-red",
          },
          {
            speakerName: "Benaissa Ayoub",
            speakerField:
              "Homomorphic Encryption Team Lead @Openmind, Docker Community leader",
            talkName: "Privacy-Preserving Machine Learning",
            imageSpeaker: "speakers/benaissa.jpg",
            topBarColor: "bg-yellow",
          },
          {
            speakerName: "Oussama Hafferssas",
            speakerField:
              "Mobile Software Engineer @capgeminifrance Financial Services",
            talkName: "Interesting facts about Jetpack Compose",
            imageSpeaker: "speakers/oussama.jpg",
            topBarColor: "bg-blue",
          },
          {
            speakerName: "Hadjer Benmeziane",
            speakerField: "PhD Student at UPHF, WTM Scholar and WTM Ambassador",
            talkName: "Women Can Code Panel (Panel)",
            imageSpeaker: "speakers/hadjer.jpg",
            topBarColor: "bg-green",
          },
          {
            speakerName: "Manal Slamani",
            speakerField:
              "Freshly graduated Information Systems Engineer, WTM Ambassador",
            talkName: "Women Can Code Panel (Panel)",
            imageSpeaker: "speakers/manal.jpg",
            topBarColor: "bg-green",
          },
          {
            speakerName: "Meyssa Zouambi",
            speakerField: " PhD student at Lille University, WTM Ambassador",
            talkName: "Women Can Code Panel (Panel)",
            imageSpeaker: "speakers/meyssa.jpg",
            topBarColor: "bg-green",
          },
          {
            speakerName: "Abdellfetah Sghiouar",
            speakerField: "Google Cloud Engineer",
            talkName: "Running Serveless apps on GCP with  Cloud Run",
            imageSpeaker: "speakers/abdelfettah.jpg",
            topBarColor: "bg-nightBlue",
          },
          {
            speakerName: "Mais Alharaki",
            speakerField: "Software Engineer, Flutter GDE",
            talkName: "FlutterFire: Query like a Hero",
            imageSpeaker: "speakers/mais.jpeg",
            topBarColor: "bg-yellow",
          },
          {
            speakerName: "Fatima Zohra Benhamida",
            speakerField: "Assistant professor",
            talkName: "Is the world smarter using IOT?",
            imageSpeaker: "speakers/benhamida.jpg",
            topBarColor: "bg-gray",
          },
          {
            speakerName: "Asmaa Ibrahim",
            speakerField:
              "Founder of Seba, ML & NLP.Data Platform Manager in Vodafone Roaming Service",
            talkName: "FlutterFire: Query like a Hero",
            imageSpeaker: "speakers/asmaa_ibrahim.jpg",
            topBarColor: "bg-blue",
          },
          {
            speakerName: "Abdulaziz Alhammadi",
            speakerField:
              "GDC Saudi Leada, Gsuit Google Developer Expert and TechTrans CO CEO",
            talkName: "HOw to keep kids safe online",
            imageSpeaker: "speakers/abdulaziz.jpg",
            topBarColor: "bg-blue",
          },
          {
            speakerName: "Asmaa Haidour",
            speakerField: "WTM Algiers Lead, WTM Ambassador",
            talkName: "Gender equity in tech session (Workshop) ",
            imageSpeaker: "speakers/asmaa.jpg",
            topBarColor: "bg-green",
          },
          {
            speakerName: "Dr. Djalila Rahali",
            speakerField:
              "CEO & Founder @NafsiyaTECH, Cyberpsychologist researcher since 1999",
            talkName: "WTM Online Safety Talk",
            imageSpeaker: "speakers/doctor.png",
            topBarColor: "bg-yellow",
          },
        ]}
      ></SpeakerSection>
      <ChallengesSection></ChallengesSection>
      <SponsorSection
        sponsors={[
          {
            sponsorLogo: "sponsors/salamat.jpg",
            sponsorName: "Salamat",
          },
          {
            sponsorLogo: "sponsors/github.jpg",
            sponsorName: "Github Education",
          },
        ]}
      ></SponsorSection>
      <FooterSection></FooterSection>
    </Layout>
  )
}

export default Index
