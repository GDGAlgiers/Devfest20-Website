import React, { PropsWithChildren, ReactElement } from "react"
import Header from "./Header"
import SEO, { SeoProps } from "./seo"
import HeroSection from "../components/Hero"

interface Props {
  seo: Partial<SeoProps>
}

function Layout({ seo, children }: PropsWithChildren<Props>): ReactElement {
  return (
    <>
      <SEO {...seo} />
      <Header />
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
