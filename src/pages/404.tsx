import { PageProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import { H1 } from "../components/typography/typography"
export default function (props: PageProps) {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Title>404 | Page not found</Title>
    </div>
  )
}

const Title = styled(H1).attrs({
  className: "font-light",
})``
