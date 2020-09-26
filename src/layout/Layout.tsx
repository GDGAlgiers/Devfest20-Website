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
      <div
        id="hero"
        style={{
          height: "1000px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="bg-nightBlue text-yellow text-6xl"
      >
        HERO SECTION
      </div>
      <main>{children}</main>
      <div
        id="other"
        style={{
          height: "1000px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="bg-nightBlue text-yellow text-6xl"
      >
        OTHER SECTION
      </div>
      <footer>All rights reserved to GDG Algiers</footer>
    </>
  )
}

export default Layout
