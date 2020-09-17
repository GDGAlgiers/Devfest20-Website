import { PageProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import { H1 } from "../components/typography/typography"
import cls from "classnames"
export default function (props: PageProps) {
  return (
    <Wrapper>
      <Title>
        <span className="text-blue-500 font-medium">404</span>
        <VerticalLine className="bg-blue-500"></VerticalLine>
        <span>Page not found</span>
      </Title>
    </Wrapper>
  )
}

/// Styled Components
const Wrapper = styled.div.attrs((props) => ({
  className: cls("flex justify-center items-center"),
}))`
  height: 100vh;
  width: 100%;
`
const VerticalLine = styled.span.attrs((props) => ({
  className: cls("inline-block mx-5 bg-black rounded-sm", props.className),
}))`
  height: 3rem;
  width: 5px;
`
const Title = styled(H1).attrs((props) => ({
  className: cls("font-thin"),
}))``
