import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import Card, { CardProps } from "../common/Card/Card"
import { H4 } from "../typography/typography"
import cls from "classnames"
import tw from "twin.macro"

interface ChallengeProps {
  headerText?: string
  bodyText?: string
  actionText: string
  dark?: boolean
  cardOptions?: CardProps
  secondaryColor?: string
}

function ChallengeCard({
  headerText,
  bodyText,
  actionText,
  secondaryColor,
  dark,
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
      {" "}
      <Card
        contentAreaClassName={cls(
          cardOptions.contentAreaClassName,
          "text-center"
        )}
        containerClassName={cls(
          cardOptions.containerClassName,
          "relative h-full w-full"
        )}
        topBarClassName={cls(cardOptions.topBarClassName, topBarBgColor)}
      >
        <HeaderText> {headerText} </HeaderText>
        <BodyText> {bodyText} </BodyText>
        <ActionTextContainer>
          <ActionText hover={hover} color={actionTextColor}>
            {" "}
            {actionText}{" "}
          </ActionText>
        </ActionTextContainer>
        <ChallengeIcon></ChallengeIcon>
      </Card>
    </div>
  )
}

export default ChallengeCard

/// Styled Components

const HeaderText = styled(H4).attrs((props) => ({
  ...props,
  className: cls("font-normal text-nightBlue my-4"),
}))``

const BodyText = styled.div.attrs((props) => ({
  ...props,
  className: cls("px-4"),
}))``

const ActionTextContainer = styled.div.attrs((props) => ({
  ...props,
  className: cls("h-24"),
}))``
const ActionText = styled(H4).attrs((props) => ({
  ...props,
  className: cls("font-normal my-8 ", props.color, {
    appear: props.hover,
    diappear: !props.hover,
  }),
}))`
  &.appear {
    ${tw`bg-nightBlue font-bold`}
  }
  &.disappear {
    ${tw`bg-green`}
  }
`

const ChallengeIcon = styled.div.attrs((props) => ({
  ...props,
  className: cls(""),
}))``
