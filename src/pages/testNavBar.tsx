import { Link, PageProps } from "gatsby"
import React, { ReactElement } from "react"
import { H1 } from "../components/typography/typography"
import Navbar from "../components/Navbar/Navbar"
interface Props {}

function TestNavbar({}: PageProps<Props>): ReactElement {
  return (
    <div>
      <header className="fixed w-full bg-nightBlue text-white">
        <Navbar></Navbar>
      </header>
      <main className="pt-24">
        <H1 className="text-blue">Hello in index page</H1>
      </main>
    </div>
  )
}

export default TestNavbar
