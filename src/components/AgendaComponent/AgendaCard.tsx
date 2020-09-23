import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import Card, { CardProps } from "../common/Card/Card"
import { H3 } from "../typography/typography"
import cls from "classnames"
interface AgendaProps {
  header?: string
  cardOptions: CardProps
  containerClassName?: string
  topBarColor: string
  hoverToBarColor: string
}

function AgendaCard({
  header,
  cardOptions,
  containerClassName,
  topBarColor,
  hoverToBarColor,
}: AgendaProps): ReactElement {
  const [hover, setHover] = useState(false)

  return (
    <div
      className={cls(
        "inline-block transition-all ease-in-out duration-500",
        containerClassName
      )}
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
    >
      {" "}
      <Card
        contentAreaClassName={cls(cardOptions.contentAreaClassName, "p-10")}
        containerClassName={cls(
          cardOptions.containerClassName,
          "max-h-screen relative"
        )}
        topBarClassName={cls(
          cardOptions.topBarClassName,
          "transition-all duration-200 ease",
          {
            [hoverToBarColor]: hover,
            [topBarColor]: !hover,
          }
        )}
      >
        <HeaderText hover={hover}>{header}</HeaderText>
        <Agenda show={hover}>
          <AgendaItem>10h:00 - 11h:00 Openning Ceremony</AgendaItem>
          <AgendaItem>10h:00 - 11h:00 Openning Ceremony</AgendaItem>
          <AgendaItem>10h:00 - 11h:00 Openning Ceremony</AgendaItem>
          <AgendaItem>10h:00 - 11h:00 Openning Ceremony</AgendaItem>
          <AgendaItem>10h:00 - 11h:00 Openning Ceremony</AgendaItem>
        </Agenda>
      </Card>
    </div>
  )
}

export default AgendaCard

/// Styled Components
const HeaderText = styled(H3).attrs<{ hover: boolean }>((props) => ({
  ...props,
  className: cls(
    "transform translate-all ease duration-500 pb-6 text-5xl font-light",
    {
      "translate-y-20": !props.hover,
      "translate-y-0": props.hover,
    }
  ),
}))``
const Agenda = styled.ul.attrs<{ show: boolean }>((props) => ({
  ...props,
  className: cls(
    "text-center mt-2 origin-bottom-right transition-all ease duration-500 font-bold text-xl",
    {
      collapse: !props.show,
      show: props.show,
    }
  ),
}))`
  &.collapse {
    opacity: 0;
    transform: scale(0);
  }
  &.show {
    opacity: 1;
    transform: scale(1);
  }
`
const AgendaItem = styled.li``
