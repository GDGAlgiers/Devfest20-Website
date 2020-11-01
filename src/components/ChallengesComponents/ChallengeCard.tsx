import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import Card, { CardProps } from "../common/Card/Card"
import { H4 } from "../typography/typography"
import cls from "classnames"

export interface ChallengeProps {
  headerText: string
  bodyText: string
  actionText: string
  dark: boolean
  cardOptions?: CardProps
  icon: ImageProps
  secondaryColor: SecondaryColorProps
  logos: LogosProps
  narrowCard: boolean
}
interface LogosProps extends Array<ImageProps> {}

interface ImageProps {
  src?: string
  imgStyle?: string
  initialStyle?: string
  translatedStyle?: string
}
interface SecondaryColorProps {
  topBarBgColor?: string
  actionTextColor?: string
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
  narrowCard,
}: ChallengeProps): ReactElement {
  const [hover, setHover] = useState(false)
  return (
    <div
      style={{ width: "18rem", height: "18rem" }}
      className={cls("inline-block cursor-pointer")}
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
    >
      <div className="justify-center md:justify-end flex">
        {logos.map((logo) => (
          <AnimatedImage
            src={require("../../assets/pngs/" + logo.src + ".png")}
            alt={logo.src}
            hover={hover}
            imgStyle={logo.imgStyle}
            initialStyle={logo.initialStyle}
            translatedStyle={logo.translatedStyle}
            logo={true}
          />
        ))}
      </div>{" "}
      <Card
        contentAreaClassName={cls(
          cardOptions?.contentAreaClassName,
          "text-center",
          {
            "bg-white border-nightBlue": !dark,
            "bg-nightBlue border-white": dark,
          }
        )}
        containerClassName={cls(
          cardOptions?.containerClassName,
          "relative h-full w-full overflow-hidden",
          {
            "border-nightBlue": !dark,
            "border-white": dark,
          }
        )}
        topBarClassName={cls(
          cardOptions?.topBarClassName,
          secondaryColor?.topBarBgColor,
          {
            "border-white": dark,
            "border-nightBlue": !dark,
          }
        )}
      >
        <HeaderText dark={dark}> {headerText} </HeaderText>
        <BodyText dark={dark}> {bodyText} </BodyText>
        <ActionTextContainer>
          <AnimatedImage
            src={require("../../assets/pngs/" + icon.src + ".png")}
            alt={icon.src}
            hover={hover}
            imgStyle={icon.imgStyle}
            initialStyle={icon.initialStyle}
            translatedStyle={icon.translatedStyle}
            logo={false}
          />
          <ActionText
            hover={hover}
            narrowCard={narrowCard}
            color={secondaryColor?.actionTextColor}
          >
            {actionText}
          </ActionText>
        </ActionTextContainer>
      </Card>
    </div>
  )
}
export default ChallengeCard

/// Styled Components

const HeaderText = styled(H4).attrs<{ dark: boolean }>((props) => ({
  ...props,
  className: cls("font-light mt-2 mb-4 mx-4", {
    "text-nightBlue": !props.dark,
    "text-white": props.dark,
  }),
}))``

const BodyText = styled.div.attrs<{ dark: boolean }>((props) => ({
  ...props,
  className: cls("px-4", {
    "text-nightBlue": !props.dark,
    "text-white": props.dark,
  }),
}))``

const ActionTextContainer = styled.div.attrs((props) => ({
  ...props,
  className: cls("animate-bounce md:animate-none h-16 "),
}))``

const ActionText = styled(H4).attrs<{ hover: boolean; narrowCard: boolean }>(
  (props) => ({
    ...props,
    className: cls(
      "font-light my-8 transition duration-200 transform",
      props.color,
      {
        "translate-y-0": props.hover && !props.narrowCard,
        "md:translate-y-32": !props.hover && !props.narrowCard,
        "-translate-y-4": props.hover && props.narrowCard,
        "-translate-y-4 md:translate-y-32": !props.hover && props.narrowCard,
      }
    ),
  })
)``

const AnimatedImage = styled.img.attrs<{
  initialStyle: string
  translatedStyle: string
  imgStyle: string
  hover: boolean
  logo: boolean
}>((props) => ({
  ...props,
  src: props.src,
  className: cls(props.imgStyle, {
    [props.initialStyle]: !props.hover,
    [props.translatedStyle]: props.hover,
    "absolute transition duration-200 transform overflow-hidden": props.logo,
    "md:flex hidden md:absolute md:transition md:duration-200 md:transform md:overflow-hidden": !props.logo,
  }),
}))``
