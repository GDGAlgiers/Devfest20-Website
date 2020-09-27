import { PageProps } from "gatsby"
import React, { ReactElement } from "react"
import AboutSection from "../components/About/AboutSection"
import Layout from "../layout/Layout"

interface Props {}

function testFeatureAbout({}: PageProps<Props>): ReactElement {
  return (
    <Layout pageTitle="Index" pageDescription="GDG Algiers' Devfest20 Website">
      <AboutSection></AboutSection>
    </Layout>
  )
}

export default testFeatureAbout
