import React, { ReactElement, useEffect, useState } from "react"
import styled from "styled-components"
import cls from "classnames"
import Navbar from "../components/Navbar/Navbar"
import { customShadow } from "../components/common/css"
import { LARGE } from "../utils/medias"
import { Link } from "gatsby"
import { useElementInViewPort } from "../utils/viewport"
import { useLayoutEffect } from "react"
interface HeaderProps {}

function Header(props: HeaderProps): ReactElement {
  const [showBrand, setShowBrandImage] = useState(false)
  const [heroElement, setHeroElement] = useState<HTMLElement | null>(null) /// This is needed to prevent problems with SSR
  const heroInViewPort = useElementInViewPort(heroElement)
  useLayoutEffect(() => {
    /// As soon as the Component is loaded we set the true hero element
    setHeroElement(document.getElementById("hero"))
  }, [])
  useEffect(() => {
    setShowBrandImage(!heroInViewPort)
  }, [heroInViewPort])
  return (
    <StyledHeader className="z-10">
      <Link to="/">
        <Brand
          src={require("../assets/svgs/devfest.svg")}
          alt="Devfest20"
          className={cls({
            "opacity-0": !showBrand ?? true,
            "opacity-100": showBrand,
          })}
        ></Brand>
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
  className: cls(
    "flex-col z-10 absolute self-stretch justify-center transition-opacity duration-500 ease",
    props.className
  ),
}))`
  top: 1rem;
  left: 4%;
  @media ${LARGE} {
    top: 25%;
  }
`
