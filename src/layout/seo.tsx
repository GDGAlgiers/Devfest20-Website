import React, { ReactElement } from "react"
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo"

export interface SeoProps extends GatsbySeoProps {}

function SEO(props: SeoProps): ReactElement {
  return (
    <GatsbySeo
      title={props.title}
      description={props.description}
      titleTemplate="%s"
    />
  )
}

export default SEO
