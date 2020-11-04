import React, { ReactElement, ReactNodeArray } from "react"
import styled from "styled-components"
import Button from "../Button/Button"
import { customShadow } from "../css"

interface Props {
  options: ReactNodeArray
  className?: string
  id?: string
  onClose: () => void
}

function Dropdown(props: Props): ReactElement {
  return (
    <Wrapper id={props.id} className={props.className}>
      <button
        onClick={props.onClose}
        className="p-2 shadow-md bg-yellow absolute right-0 top-0 mt-1 mr-2"
      />
      {props.options.map((option) => (
        <Item>{option}</Item>
      ))}
    </Wrapper>
  )
}

export default Dropdown

const Wrapper = styled.div`
  ${customShadow}
`
const Item = styled.div``
