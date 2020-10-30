import React, { ReactElement, useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
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
    var image = document.getElementById("images")
    image?.animate(
      {
        opacity: [1, 0.7, 0],
      },
      {
        duration: 500,
        easing: "ease-out",
      }
    )
    setImageIndex(imageIndex + 1 < images.length ? imageIndex + 1 : 0)
    image?.animate(
      {
        opacity: [0, 0.7, 1],
      },
      {
        duration: 700,
        easing: "ease-in",
      }
    )
  }

  const previousImage = () => {
    var image = document.getElementById("images")
    image?.animate(
      {
        opacity: [1, 0.7, 0],
      },
      {
        duration: 500,
        easing: "ease-out",
      }
    )
    setImageIndex(imageIndex - 1 >= 0 ? imageIndex - 1 : images.length - 1)
    image?.animate(
      {
        opacity: [0, 0.7, 1],
      },
      {
        duration: 700,
        easing: "ease-in",
      }
    )
  }

  useEffect(() => {
    const next = setTimeout(() => {
      nextImage()
    }, 3000)
    // Clear timeout if the component is unmounted
    return () => clearTimeout(next)
  })

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
        <Images id="images">
          <Image
            fadeIn={false}
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

const imagesAnimation = keyframes`
 from { opacity: 0 }
 to   { opacity: 1 } 
 `

const Images = styled.div.attrs((props) => ({
  ...props,
  className: cls(props.className, "w-full border-solid border-white "),
}))`
  height: 345px;
  border-width: 3px;
  animation-name: ${imagesAnimation};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`

const ChangeImageButton = styled.button.attrs((props) => ({
  ...props,
  className: cls(props.className),
}))`
  z-index: 1;
`
