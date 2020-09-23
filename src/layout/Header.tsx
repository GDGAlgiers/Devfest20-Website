import React, { ReactElement } from "react"
import styled from "styled-components"
import cls from "classnames"
import Navbar from "../components/Navbar/Navbar"
interface HeaderProps {}

function Header(props: HeaderProps): ReactElement {
  return (
    <StyledHeader className="z-10">
      <Navbar />
    </StyledHeader>
  )
}

export default Header

/// Styled Components

const StyledHeader = styled.header.attrs((props) => ({
  ...props,
  className: cls("fixed w-full bg-nightBlue text-white justify-center"),
}))``
