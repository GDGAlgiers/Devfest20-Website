import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

interface QueryData {
  images: {
    edges: {
      node: {
        relativePath: string
        name: string
        childImageSharp: {
          fluid: FluidObject | FluidObject[]
        }
      }
    }[]
  }
}

interface SponsorLogoProp {
  sponsorLogo?: string
}

function SponsorLogo({ sponsorLogo }: SponsorLogoProp): ReactElement {
  const query = graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `

  const data = useStaticQuery<QueryData>(query)

  //const image = getImage(data.images.edges)

  const image = data.images.edges.filter(
    (edge) => edge.node.relativePath === sponsorLogo
  )[0].node.childImageSharp.fluid

  return (
    <>
      <Image fluid={image} className="w-full relative inset-0 h-full" />
    </>
  )
}

export default SponsorLogo

/// Styled Components
