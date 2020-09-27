import React, {
  CSSProperties,
  MouseEventHandler,
  PropsWithChildren,
  ReactElement,
} from "react"
import styled from "styled-components"
import cls from "classnames"
import { customShadow } from "../css"
interface ButtonProps {
  className?: string
  style?: CSSProperties
  onClick: MouseEventHandler<HTMLButtonElement>
}
/**
 * Custom Devfest20 Button to be used in all the project
 * @param props Properties that can be passed to customize the component of type {ButtonProps}
 */
function Button(props: PropsWithChildren<ButtonProps>): ReactElement {
  return (
    <StyledButton
      onClick={props.onClick}
      style={props.style}
      className={cls("outline-none focus:outline-none", props.className)}
    >
      {props.children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button.attrs((props) => ({
  ...props,
}))`
  ${customShadow}
`
