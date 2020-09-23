import { PageProps } from "gatsby"
import React, { ReactElement } from "react"
import { H1 } from "../components/typography/typography"
import Header from "../layout/Header"

interface Props {}

function TestNavbar({}: PageProps<Props>): ReactElement {
  return (
    <div>
      <Header />
      <main className="pt-24">
        <H1 className="text-blue">Hello in index page</H1>
      </main>
    </div>
  )
}

export default TestNavbar
