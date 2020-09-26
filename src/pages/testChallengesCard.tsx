import { PageProps } from "gatsby"
import React, { ReactElement } from "react"
import { H1 } from "../components/typography/typography"
import Layout from "../layout/Layout"
import Card from "../components/ChallengesComponents/ChallengeCard"

interface Props {}

function testChallengeCard({}: PageProps<Props>): ReactElement {
  let frontendLogos = [
    {
      src: "vueLogo",
      imgStyle: "w-16",
      initialStyle: " translate-x-12 translate-y-6 rotate-45",
      translatedStyle: "translate-x-16 translate-y-6 rotate-45",
    },
    {
      src: "reactLogo",
      imgStyle: "w-32",
      initialStyle: "translate-x-16 -translate-y-10",
      translatedStyle: "translate-x-20 -translate-y-20",
    },
    {
      src: "angularLogo",
      imgStyle: "w-16",
      initialStyle: "-translate-x-8 -translate-y-8",
      translatedStyle: "-translate-x-8 -translate-y-16",
    },
  ]
  let backendLogos = [
    {
      src: "laravelLogo",
      imgStyle: "w-16",
      initialStyle: "-translate-x-8 -translate-y-8",
      translatedStyle: "-translate-x-8 -translate-y-16",
    },
    {
      src: "djangoLogo",
      imgStyle: "w-20 rounded",
      initialStyle: "translate-x-12 -translate-y-6 rotate-45",
      translatedStyle: "translate-x-16 -translate-y-12 rotate-45",
    },
    {
      src: "nodeLogo",
      imgStyle: "w-16",
      initialStyle: " translate-x-16 translate-y-10",
      translatedStyle: "translate-x-20 translate-y-12",
    },
  ]
  return (
    <Layout
      pageTitle="Test challenges"
      pageDescription="GDG Algiers' Devfest20 Website"
    >
      <H1 className="text-blue m-20">Testing challenge's card feature</H1>
      <section>
        <div className="grid-flow-row">
          <Card
            cardOptions=""
            dark={false}
            secondaryColor="yellow"
            logos={frontendLogos}
            icon="frontendIcon"
            headerText="Frontend"
            bodyText="Front end Front end Front end Front end Front end Front end"
            actionText="Participate Now!"
          ></Card>
          <Card
            cardOptions=""
            dark={true}
            secondaryColor="green"
            logos={backendLogos}
            icon="mlIcon"
            headerText="Backend"
            bodyText="Back end Back end Back end Back end Back end Back end"
            actionText="Participate Now!"
          ></Card>
        </div>
      </section>
    </Layout>
  )
}

export default testChallengeCard
