import React, { PropsWithChildren, ReactElement } from "react"
import Header from "./Header"
import SEO from "./seo"

interface Props {
  pageTitle: string
  pageDescription: string
}

function Layout({
  pageTitle,
  pageDescription,
  children,
}: PropsWithChildren<Props>): ReactElement {
  return (
    <>
      <SEO title={pageTitle} description={pageDescription} />
      <Header />
      <main className="py-24 px-16">{children}</main>
      <footer>All rights reserved to GDG Algiers</footer>
    </>
  )
}

export default Layout
