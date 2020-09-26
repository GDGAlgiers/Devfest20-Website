import React, { ReactElement } from "react"
import styled from "styled-components"
import cls from "classnames"
import Navbar from "../components/Navbar/Navbar"
import { customShadow } from "../components/common/css"
import { LARGE } from "../utils/medias"
import { Link } from "gatsby"
interface HeaderProps {}

function Header(props: HeaderProps): ReactElement {
  return (
    <StyledHeader className="z-10">
      <Link to="/">
        <Brand src={require("../assets/svgs/devfest.svg")}></Brand>
      </Link>
      <Navbar />
    </StyledHeader>
  )
}

export default Header

/// Styled Components

const StyledHeader = styled.header.attrs((props) => ({
  ...props,
  className: cls("fixed w-full bg-nightBlue text-white justify-center"),
}))`
  ${customShadow}
`
const Brand = styled.img.attrs((props) => ({
  className: "flex-col z-10 absolute self-stretch justify-center",
}))`
  top: 1rem;
  left: 4%;
  @media ${LARGE} {
    top: 25%;
  }
`
