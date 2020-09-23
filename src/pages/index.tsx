import { Link, PageProps } from "gatsby"
import React, { ReactElement } from "react"
import { H1 } from "../components/typography/typography"
import Layout from "../layout/Layout"

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
    </Layout>
  )
}

export default index
