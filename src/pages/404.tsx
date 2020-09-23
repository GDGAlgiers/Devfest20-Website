import { Link, PageProps } from "gatsby"
import React from "react"
import styled, { css, keyframes } from "styled-components"
import { H1 } from "../components/typography/typography"
import cls from "classnames"
export default function (props: PageProps) {
  return (
    <Wrapper>
      <Link
        to="/"
        className="transition-all duration-200 ease border-2 border-solid rounded-md p-2 text-yellow-lighter absolute top-0 left-0 m-4 hover:bg-yellow-lighter hover:text-nightBlue"
      >
        {" "}
        {"<- "} Take me back
      </Link>
      <Title>
        <span className="text-yellow-lighter font-medium">404</span>
        <VerticalLine className="bg-yellow sm:h-12 h-10 align-baseline"></VerticalLine>
        <span className="text-white">Page not found</span>
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
  className: cls("flex justify-center items-center", "bg-nightBlue"),
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
