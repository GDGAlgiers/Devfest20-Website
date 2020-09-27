import { Link, PageProps } from "gatsby"
import React, { ReactElement } from "react"
import ChallengesSection from "../components/ChallengesComponents/ChallengesSection"
import { H1 } from "../components/typography/typography"
import Layout from "../layout/Layout"
import Card from "../components/common/Card/Card"

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
      <ChallengesSection></ChallengesSection>
    </Layout>
  )
}

export default index
