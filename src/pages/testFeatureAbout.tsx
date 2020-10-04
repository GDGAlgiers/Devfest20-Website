import { PageProps } from "gatsby"
import React, { ReactElement } from "react"
import Layout from "../layout/Layout"
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
