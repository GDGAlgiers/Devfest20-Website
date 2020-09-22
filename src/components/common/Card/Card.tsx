import React, { CSSProperties, PropsWithChildren, ReactElement } from "react"
import styled from "styled-components"
import cls from "classnames"
import { customShadow } from "../css"
export interface CardProps {
  containerClassName?: string
  topBarClassName?: string
  contentAreaClassName?: string
  containerStyle?: CSSProperties
  topBarStyle?: CSSProperties
  contentAreaStyle?: CSSProperties
}

function Card({
  containerClassName,
  topBarClassName,
  contentAreaClassName,
  containerStyle,
  topBarStyle,
  contentAreaStyle,
  children,
}: PropsWithChildren<CardProps>): ReactElement {
  return (
    <CardContainer style={containerStyle} className={containerClassName}>
      <CardTopBar style={topBarStyle} className={topBarClassName}></CardTopBar>
      <CardContentArea
        style={contentAreaStyle}
        className={contentAreaClassName}
      >
        {children}
      </CardContentArea>
    </CardContainer>
  )
}

export default Card

/// Styled Components

const CardContainer = styled.div.attrs((props) => ({
  ...props,
  className: cls(
    "flex flex-col justify-start items-center min-h-full border-2 border-nightBlue m-1",
    props.className
  ),
}))`
  ${customShadow}
`
const CardTopBar = styled.div.attrs((props) => ({
  ...props,
  className: cls("h-4 w-full border-b-2", props.className),
}))``
const CardContentArea = styled.div.attrs((props) => ({
  ...props,
  className: cls(
    "flex flex-col justify-center items-center self-stretch h-full",
    props.className
  ),
}))``
