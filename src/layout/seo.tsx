import React, { ReactElement } from "react"
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo"

interface Props extends GatsbySeoProps {}

function SEO(props: Props): ReactElement {
  return (
    <GatsbySeo
      title={props.title}
      description={props.description}
      titleTemplate="%s"
    />
  )
}

export default SEO
