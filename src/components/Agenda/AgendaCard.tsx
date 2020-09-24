import React, { ReactElement, useState, useRef } from "react"
import styled from "styled-components"
import Card, { CardProps } from "../common/Card/Card"
import { H3 } from "../typography/typography"
import cls from "classnames"

interface AgendaItemData {
  startHour: string
  endHour: string
  name: string
}
interface AgendaProps {
  header?: string
  headerClassName?: string
  items: AgendaItemData[]
  itemClassName?: string
  cardOptions: CardProps
  containerClassName?: string
  topBarColor: string
  hoverTopBarColor: string
}

function AgendaCard({
  header,
  cardOptions,
  containerClassName,
  topBarColor,
  hoverTopBarColor,
  headerClassName,
  itemClassName,
  items,
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
      <Card
        contentAreaClassName={cls(cardOptions.contentAreaClassName)}
        containerClassName={cls(
          cardOptions?.containerClassName,
          "max-h-screen"
        )}
        topBarClassName={cls(
          cardOptions?.topBarClassName,
          "transition-all duration-200 ease",
          {
            [hoverTopBarColor]: hover,
            [topBarColor]: !hover,
          }
        )}
      >
        <HeaderText hover={hover} className={cls(headerClassName)}>
          {header}
        </HeaderText>
        <Agenda show={hover}>
          {items.map((item) => (
            <AgendaItem className={cls(itemClassName)}>
              <span>{item.startHour}</span> - <span>{item.endHour}</span>
              <span> {item.name}</span>
            </AgendaItem>
          ))}
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
      translate: !props.hover,
      "translate-y-0": props.hover,
    }
  ),
}))`
  &.translate{
    transform : translateY(10rem);
  }
  @media (min-width : 370px) {
    &.translate{
    transform : translateY(5rem);
  }
  @media (min-width : 640px) {
   
  }
  @media (min-width : 800px) {
  
  }
  @media (min-width : 1024px) {
    
  }
  @media (min-width : 1280px) {
   
  }
`
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
