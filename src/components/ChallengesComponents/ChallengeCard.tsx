import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import Card, { CardProps } from "../common/Card/Card"
import { H4 } from "../typography/typography"
import cls from "classnames"
let allLogos = {
  vueLogo: require("../../assets/pngs/vueLogo.png"),
  reactLogo: require("../../assets/pngs/reactLogo.png"),
  angularLogo: require("../../assets/pngs/angularLogo.png"),
  djangoLogo: require("../../assets/pngs/djangoLogo.png"),
  nodeLogo: require("../../assets/pngs/nodeLogo.png"),
  laravelLogo: require("../../assets/pngs/laravelLogo.png"),
}
let allIcons = {
  frontendIcon: require("../../assets/pngs/frontendIcon.png"),
  mlIcon: require("../../assets/pngs/mlIcon.png"),
}

interface ChallengeProps {
  headerText?: string
  bodyText?: string
  actionText: string
  dark?: boolean
  icon?: string
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
      className={cls("w-64 h-64 inline-block m-10")}
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
    >
      <div className="justify-end flex">
        {logos.map((logo) => (
          <Image
            src={allLogos[logo.src]}
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
          <ChallengeIcon src={allIcons[icon]} hover={hover} />
          <ActionText hover={hover} color={actionTextColor}>
            {" "}
            {actionText}{" "}
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
  className: cls("font-light my-4", {
    "text-nightBlue": !props.dark,
    "text-white": props.dark,
  }),
}))``

const BodyText = styled.div.attrs((props) => ({
  ...props,
  className: cls("px-4", {
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

const ChallengeIcon = styled.img.attrs((props) => ({
  ...props,
  src: props.src,
  className: cls("w-16 absolute mt-8 pl-0 transition duration-200 transform ", {
    "translate-x-0": !props.hover,
    "-translate-x-32": props.hover,
  }),
}))``

const Image = styled.img.attrs((props) => ({
  ...props,
  src: props.src,
  className: cls("absolute transition duration-200 transform", props.imgStyle, {
    [props.initialStyle]: !props.hover,
    [props.translatedStyle]: props.hover,
  }),
}))``
