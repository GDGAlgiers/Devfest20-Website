import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import Card, { CardProps } from "../common/Card/Card"
import { H3 } from "../typography/typography"
import cls from "classnames"
import { EXTRA_SMALL } from "../../utils/medias"
import { PageProps, graphql, useStaticQuery } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

interface QueryData {
  file: {
    childImageSharp: {
      fluid: FluidObject | FluidObject[]
    }
  }
}

interface SpeakerProps {
  header?: string
  speakerName?: string
  speakerField?: string
  talkName?: string
  cardOptions: CardProps
  containerClassName?: string
  topBarColor: string
  imageSpeaker: string
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
    {
      file(relativePath: { eq: "test.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

  const data = useStaticQuery<QueryData>(query)

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
          fluid={data.file.childImageSharp.fluid}
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

const Speaker = styled.ul.attrs<{ isHover: boolean }>((props) => ({
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

const Talk = styled.ul.attrs<{ isHover: boolean }>((props) => ({
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
