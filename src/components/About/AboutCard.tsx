import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import Card, { CardProps } from "../common/Card/Card"
import { H1, H3 } from "../typography/typography"
import cls from "classnames"
import { graphql, useStaticQuery } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

interface QueryData {
  allImageSharp: {
    edges: [
      {
        node: {
          fluid: FluidObject | FluidObject[]
        }
      }
    ]
  }
}
const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`

interface AboutProps {
  header?: string
  containerClassName?: string
  contentAreaClassName?: string
  topBarColor: string
}
function AboutCard({
  header,
  containerClassName,
  contentAreaClassName,
  topBarColor,
}: AboutProps): ReactElement {
  const data = useStaticQuery<QueryData>(query)
  const images = data.allImageSharp.edges.filter(
    (edge) =>
      edge.node.fluid["originalName"] != "ArrowLeft.png" &&
      edge.node.fluid["originalName"] != "ArrowRight.png"
  )
  const arrowLeft = data.allImageSharp.edges.filter(
    (edge) => edge.node.fluid["originalName"] == "ArrowLeft.png"
  )
  const arrowRight = data.allImageSharp.edges.filter(
    (edge) => edge.node.fluid["originalName"] == "ArrowRight.png"
  )
  const [imageIndex, setImageIndex] = useState(0)
  const nextImage = () =>
    setImageIndex(imageIndex + 1 < images.length ? imageIndex + 1 : 0)
  const previousImage = () =>
    setImageIndex(imageIndex - 1 >= 0 ? imageIndex - 1 : images.length - 1)

  return (
    <div className={cls(containerClassName)}>
      <Card
        containerStyle={{ borderColor: "#fff", borderWidth: 2 + "px" }}
        contentAreaClassName={cls(contentAreaClassName, "flex flex-row")}
        contentAreaStyle={{ flexDirection: "row" }}
        topBarClassName={cls(
          topBarColor,
          "h-5 border-b-2 border-solid  border-white"
        )}
        containerClassName={cls(containerClassName)}
      >
        <button className="z-10 -mr-3" onClick={previousImage}>
          <Image className=" w-8 " fluid={arrowLeft[0].node.fluid} />
        </button>

        <Image
          className="w-full max-w-sm border-2 border-solid border-white"
          fluid={images[imageIndex].node.fluid}
          alt=""
        />
        <button className="z-10 -ml-3" onClick={nextImage}>
          <Image className=" w-8 " fluid={arrowRight[0].node.fluid} />
        </button>
      </Card>
    </div>
  )
}

const ButtonLeft = styled.button.attrs({
  className: cls(""),
})

export default AboutCard
