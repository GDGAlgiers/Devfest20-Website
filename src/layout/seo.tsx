import React, { ReactElement } from "react"
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo"

export interface SeoProps extends GatsbySeoProps {}

function SEO(props: SeoProps): ReactElement {
  return (
    <GatsbySeo
      {...props}
      language={props.language ?? "en"}
      titleTemplate="%s | GDG Algiers' Devfest20 "
    />
  )
}

export default SEO
