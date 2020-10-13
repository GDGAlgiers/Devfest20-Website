import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import Card from "../common/Card/Card"
import cls from "classnames"
import { graphql, useStaticQuery } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

interface QueryData {
  allFile: {
    edges: [
      {
        node: {
          childImageSharp: {
            fluid: FluidObject | FluidObject[]
          }
        }
      }
    ]
  }
}
const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "AboutImgs" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
      }
    }
  }
`

interface AboutProps {
  containerClassName?: string
  contentAreaClassName?: string
  topBarColor: string
}
function AboutCard({
  containerClassName,
  contentAreaClassName,
  topBarColor,
}: AboutProps): ReactElement {
  const data = useStaticQuery<QueryData>(query)
  const images = data.allFile.edges.filter(
    (edge) =>
      edge.node.childImageSharp.fluid["originalName"] !== "ArrowLeft.png" &&
      edge.node.childImageSharp.fluid["originalName"] !== "ArrowRight.png"
  )
  const arrowLeft = data.allFile.edges.filter(
    (edge) =>
      edge.node.childImageSharp.fluid["originalName"] === "ArrowLeft.png"
  )
  const arrowRight = data.allFile.edges.filter(
    (edge) =>
      edge.node.childImageSharp.fluid["originalName"] === "ArrowRight.png"
  )
  const [imageIndex, setImageIndex] = useState(0)
  const nextImage = () => {
    setImageIndex(imageIndex + 1 < images.length ? imageIndex + 1 : 0)
  }
  const previousImage = () => {
    setImageIndex(imageIndex - 1 >= 0 ? imageIndex - 1 : images.length - 1)
  }
  console.log(images)
  return (
    <div className={cls(containerClassName)}>
      <Card
        containerStyle={{
          borderColor: "#fff",
          borderWidth: 2 + "px",
          height: 415 + "px",
        }}
        contentAreaClassName={cls(contentAreaClassName, "flex flex-row px-4")}
        contentAreaStyle={{ flexDirection: "row" }}
        topBarClassName={cls(topBarColor, "h-6 border-solid  border-white")}
        topBarStyle={{ borderBottomWidth: "3px" }}
        containerClassName={cls(containerClassName)}
      >
        <ChangeImageButton
          className="-mr-3"
          aria-label="Previous Image"
          onClick={previousImage}
          name="previous image"
        >
          <Image
            className="w-10 h-10"
            fluid={arrowLeft[0].node.childImageSharp.fluid}
          />
        </ChangeImageButton>
        <Images>
          <Image
            className="w-full h-full"
            fluid={images[imageIndex].node.childImageSharp.fluid}
          />
        </Images>

        <ChangeImageButton
          className=" -ml-3"
          aria-label="Next Image"
          onClick={nextImage}
          name="next image"
        >
          <Image
            className=" w-10 h-10"
            fluid={arrowRight[0].node.childImageSharp.fluid}
          />
        </ChangeImageButton>
      </Card>
    </div>
  )
}

export default AboutCard

const Images = styled.div.attrs({
  className:
    "w-full border-solid border-white transition-all duration-500 linear",
})`
  height: 345px;
  border-width: 3px;
  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
`

const ChangeImageButton = styled.button.attrs((props) => ({
  ...props,
  className: cls(props.className),
}))`
  z-index: 1;
`
