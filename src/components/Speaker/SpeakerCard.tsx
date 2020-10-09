import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import Card, { CardProps } from "../common/Card/Card"
import cls from "classnames"
import { graphql, useStaticQuery } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

interface QueryData {
  file: {
    childImageSharp: {
      fluid: FluidObject | FluidObject[]
    }
  }
}

interface SpeakerProps {
  speakerName?: string
  speakerField?: string
  talkName?: string
  cardOptions: CardProps
  topBarColor?: string
  imageSpeaker?: string
}

function SpeakerCard({
  speakerName,
  speakerField,
  talkName,
  cardOptions,
  topBarColor,
  imageSpeaker,
}: SpeakerProps): ReactElement {
  const [hover, setHover] = useState(false)

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
  const getImage = (edge: any) => {
    for (let i = 0; i < edge.length; i++) {
      if (edge[i].node.relativePath === imageSpeaker) {
        return edge[i].node.childImageSharp.fluid
      }
    }

    return null
  }

  const data = useStaticQuery<QueryData>(query)
  const image = getImage(data.images.edges)

  return (
    <div
      className={cls(
        "transition-all w-64 ease-in-out duration-500 border-nightBlue"
      )}
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
    >
      <Card
        contentAreaClassName={cls(cardOptions.contentAreaClassName)}
        containerClassName={cls(cardOptions?.containerClassName)}
        topBarClassName={cls(cardOptions?.topBarClassName, topBarColor)}
      >
        <Image
          className="w-full"
          style={{ height: "250px" }}
          fluid={image}
          alt="Sunset in the mountains"
        />
        <Speaker isHover={hover}>
          <span className={cls("text-xl")}>{speakerName}</span>
          <br />
          <p className={cls("font-hairline text-xs")}>{speakerField}</p>
        </Speaker>

        <Talk isHover={hover}>{talkName}</Talk>
      </Card>
    </div>
  )
}

export default SpeakerCard

/// Styled Components

const Speaker = styled.div.attrs<{ isHover: boolean }>((props) => ({
  ...props,
  className: cls("transition-all ease duration-200 text-center", {
    display: !props.isHover,
    hide: props.isHover,
  }),
}))`
  &.display {
    opacity: 1;
    transform: translate(0px, 20px);
  }
  &.hide {
    opacity: 0;
    transform: translate(50px, 20px);
  }
`

const Talk = styled.div.attrs<{ isHover: boolean }>((props) => ({
  ...props,
  className: cls("transition-all ease duration-200 text-center text-xl", {
    hideTalk: !props.isHover,
    displayTalk: props.isHover,
  }),
}))`
  &.hideTalk {
    opacity: 0;
    transform: translateY(50px);
  }
  &.displayTalk {
    opacity: 1;
    transform: translateY(-20px);
  }
`
