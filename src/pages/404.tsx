import { PageProps } from "gatsby"
import React from "react"
import styled, { css, keyframes } from "styled-components"
import { H1 } from "../components/typography/typography"
import cls from "classnames"
export default function (props: PageProps) {
  return (
    <Wrapper>
      <Title>
        <span className="text-purple-700 font-medium">404</span>
        <VerticalLine className="bg-purple-700 sm:h-12 h-10 align-baseline"></VerticalLine>
        <span>Page not found</span>
      </Title>
    </Wrapper>
  )
}

/// Styled Components
const FadeInKeyFrames = keyframes`
   from{
       opacity : 0
   } 
   to{
       opacity :1 
   }
`
const PageFadeIn = css`
  opacity: 0;
  animation: ${FadeInKeyFrames} 0.2s ease forwards;
`
const Wrapper = styled.div.attrs((props) => ({
  className: cls("flex justify-center items-center", "bg-gray-200"),
}))`
  height: 100vh;
  width: 100%;
  opacity: 0;
  ${PageFadeIn}
`
const VerticalLine = styled.span.attrs((props) => ({
  className: cls("inline-block mx-5 bg-black rounded-sm", props.className),
}))`
  width: 5px;
`
const Title = styled(H1).attrs((props) => ({
  className: cls("font-thin text-center"),
}))``
