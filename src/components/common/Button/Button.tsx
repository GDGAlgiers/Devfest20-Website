import React, { ReactElement } from "react"
import styled from "styled-components"
import cls from "classnames"
import { customShadow } from "../css"
interface ButtonProps {
  className?: string
  text?: string
}

function Button(props: ButtonProps): ReactElement {
  return (
    <StyledButton
      className={cls(
        "py-5 px-10 text-xl sm:text-lg outline-none focus:outline-none",
        props.className
      )}
    >
      {props.text}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button.attrs((props) => ({
  ...props,
}))`
  ${customShadow}
`
