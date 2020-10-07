import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import Card, { CardProps } from "../common/Card/Card"
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
  const nextImage = () => {
    var image1 = document.getElementById("image")
    setImageIndex(imageIndex + 1 < images.length ? imageIndex + 1 : 0)
  }
  const previousImage = () => {
    setImageIndex(imageIndex - 1 >= 0 ? imageIndex - 1 : images.length - 1)
  }

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
        <ChangeImageButton
          className="-mr-3"
          aria-label="Previous Image"
          onClick={previousImage}
          name="previous image"
        >
          <Image className=" w-8 " fluid={arrowLeft[0].node.fluid} />
        </ChangeImageButton>
        <Images id="image">
          <Image fluid={images[imageIndex].node.fluid} />
        </Images>

        <ChangeImageButton
          className="-ml-3"
          aria-label="Next Image"
          onClick={nextImage}
          name="next image"
        >
          <Image className=" w-8 " fluid={arrowRight[0].node.fluid} />
        </ChangeImageButton>
      </Card>
    </div>
  )
}

export default AboutCard

const Images = styled.div.attrs({
  className:
    "w-full max-w-sm border-2 border-solid border-white transition-all duration-500 linear",
})`
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
