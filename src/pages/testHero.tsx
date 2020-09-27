import { PageProps } from "gatsby"
import React, { ReactElement } from "react"
import AgendaSection from "../components/Agenda/AgendaSection"
import HeroSection from "../components/Hero"
import Layout from "../layout/Layout"

interface Props {}

function index({}: PageProps<Props>): ReactElement {
  return (
    <Layout pageTitle="Index" pageDescription="GDG Algiers' Devfest20 Website">
      <HeroSection />
      <AgendaSection />
    </Layout>
  )
}

export default index
