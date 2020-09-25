import { PageProps } from "gatsby"
import React, { ReactElement } from "react"
import { H1 } from "../components/typography/typography"
import Layout from "../layout/Layout"
import Card from "../components/ChallengesComponents/ChallengeCard"

interface Props {}

function testChallengeCard({}: PageProps<Props>): ReactElement {
  return (
    <Layout
      pageTitle="Test challenges"
      pageDescription="GDG Algiers' Devfest20 Website"
    >
      <H1 className="text-blue">Testing challenge's card feature</H1>
      <section>
        <div>
          <Card
            cardOptions=""
            secondaryColor="yellow"
            headerText="Frontend"
            bodyText="Front end Front end Front end Front end Front end Front end"
            actionText="Participate Now!"
          ></Card>
        </div>
      </section>
    </Layout>
  )
}

export default testChallengeCard
