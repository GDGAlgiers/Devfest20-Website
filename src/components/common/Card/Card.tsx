import React, { PropsWithChildren, ReactElement } from "react"
import styled from "styled-components"
import cls from "classnames"
import { customShadow } from "../css"
interface Props {
  className?: string
  topBarClassName?: string
  contentAreaClassName?: string
}

function Card({
  className,
  topBarClassName,
  contentAreaClassName,
  children,
}: PropsWithChildren<Props>): ReactElement {
  return (
    <CardContainer className={className}>
      <CardTopBar className={topBarClassName}></CardTopBar>
      <CardContentArea className={contentAreaClassName}>
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
  className: cls("flex justify-center items-center", props.className),
}))``
