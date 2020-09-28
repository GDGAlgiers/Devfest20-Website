import { PageProps } from "gatsby"
import React, { ReactElement } from "react"
import AgendaSection from "../components/Agenda/AgendaSection"
import Layout from "../layout/Layout"
import AboutSection from "../components/About/AboutSection"

interface Props {}

function index(props: PageProps<Props>): ReactElement {
  return (
    <Layout
      seo={{
        title: "Index",
        description: "Index page of devfest20 by GDG Algiers",
      }}
    >
      <AboutSection></AboutSection>
      <AgendaSection></AgendaSection>
    </Layout>
  )
}

export default index
