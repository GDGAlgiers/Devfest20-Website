import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import Card, { CardProps } from "../common/Card/Card"
import { H4 } from "../typography/typography"
import cls from "classnames"

interface ChallengeProps {
  headerText?: string
  bodyText?: string
  actionText: string
  dark?: boolean
  icon?: any
  cardOptions?: CardProps
  secondaryColor?: string
  logos: any
}

function ChallengeCard({
  headerText,
  bodyText,
  actionText,
  secondaryColor,
  dark,
  icon,
  logos,
  cardOptions,
}: ChallengeProps): ReactElement {
  const [hover, setHover] = useState(false)
  const topBarBgColor = `bg-${secondaryColor}`
  const actionTextColor = `text-${secondaryColor}`
  return (
    <div
      style={{ width: "18rem", height: "18rem" }}
      className={cls("inline-block")}
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
    >
      <div className="justify-end flex">
        {logos.map((logo) => (
          <AnimatedImage
            src={require("../../assets/pngs/" + logo.src + ".png")}
            hover={hover}
            imgStyle={logo.imgStyle}
            initialStyle={logo.initialStyle}
            translatedStyle={logo.translatedStyle}
          />
        ))}
      </div>{" "}
      <Card
        contentAreaClassName={cls(
          cardOptions.contentAreaClassName,
          "text-center",
          {
            "bg-white border-nightBlue": !dark,
            "bg-nightBlue border-white": dark,
          }
        )}
        containerClassName={cls(
          cardOptions.containerClassName,
          "relative h-full w-full overflow-hidden",
          {
            "border-nightBlue": !dark,
            "border-white": dark,
          }
        )}
        topBarClassName={cls(cardOptions.topBarClassName, topBarBgColor, {
          "border-white": dark,
          "border-nightBlue": !dark,
        })}
      >
        <HeaderText dark={dark}> {headerText} </HeaderText>
        <BodyText dark={dark}> {bodyText} </BodyText>
        <ActionTextContainer>
          <AnimatedImage
            src={require("../../assets/pngs/" + icon.src + ".png")}
            hover={hover}
            imgStyle={icon.imgStyle}
            initialStyle={icon.initialStyle}
            translatedStyle={icon.translatedStyle}
          />
          <ActionText hover={hover} color={actionTextColor}>
            {actionText}
          </ActionText>
        </ActionTextContainer>
      </Card>
    </div>
  )
}

export default ChallengeCard

/// Styled Components

const HeaderText = styled(H4).attrs((props) => ({
  ...props,
  className: cls("font-light my-4 mx-4", {
    "text-nightBlue": !props.dark,
    "text-white": props.dark,
  }),
}))``

const BodyText = styled.div.attrs((props) => ({
  ...props,
  className: cls("px-6", {
    "text-nightBlue": !props.dark,
    "text-white": props.dark,
  }),
}))``

const ActionTextContainer = styled.div.attrs((props) => ({
  ...props,
  className: cls("h-24"),
}))``

const ActionText = styled(H4).attrs((props) => ({
  ...props,
  className: cls(
    "font-light my-8 transition duration-200 transform",
    props.color,
    {
      "translate-y-0": props.hover,
      "translate-y-32": !props.hover,
    }
  ),
}))``

const AnimatedImage = styled.img.attrs((props) => ({
  ...props,
  src: props.src,
  className: cls("absolute transition duration-200 transform", props.imgStyle, {
    [props.initialStyle]: !props.hover,
    [props.translatedStyle]: props.hover,
  }),
}))``
