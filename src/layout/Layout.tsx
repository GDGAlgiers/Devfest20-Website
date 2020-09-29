import React, { PropsWithChildren, ReactElement } from "react"
import Header from "./Header"
import SEO, { SeoProps } from "./seo"
import HeroSection from "../components/Hero"
import { H3 } from "../components/typography/typography"

interface Props {
  seo: Partial<SeoProps>
}

function Layout({ seo, children }: PropsWithChildren<Props>): ReactElement {
  return (
    <>
      <SEO {...seo} />
      <Header />
      <main>{children}</main>
      <footer className="flex justify-center items-center py-4 bg-nightBlue">
        <H3 className="text-yellow font-light text-base md:text-xl">
          All rights reserved to GDG Algiers 2020
        </H3>
      </footer>
    </>
  )
}

export default Layout
