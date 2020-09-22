import React, { ReactElement, useEffect, useState } from "react"
import styled from "styled-components"
import cls from "classnames"
import { useAtleastMedium } from "../../utils/medias"
import {
  INDEX_ABOUT_SECTION,
  INDEX_AGENDA_SECTION,
  INDEX_CHALLENGES_SECTION,
  INDEX_SPEAKERS_SECTION,
  INDEX_SPONSORS_SECTION,
} from "../../utils/links"
import { Link } from "gatsby"

const links = [
  {
    linkName: "About",
    linkUrl: INDEX_ABOUT_SECTION,
  },
  {
    linkName: "Agenda",
    linkUrl: INDEX_AGENDA_SECTION,
  },
  {
    linkName: "Speakers",
    linkUrl: INDEX_SPEAKERS_SECTION,
  },
  {
    linkName: "Challenges",
    linkUrl: INDEX_CHALLENGES_SECTION,
  },
  {
    linkName: "Sponsors",
    linkUrl: INDEX_SPONSORS_SECTION,
  },
]
interface Props {}
function Navbar(props: Props): ReactElement {
  const isMD = useAtleastMedium()
  const [open, setOpen] = useState(false)
  const toggleNavbar = () => setOpen(!open)
  useEffect(() => {
    console.log("Navbar open ? ", open)
  }, [open])
  const renderLinks = () => {
    return links.map((link) => (
      <NavLink>
        <Link to={link.linkUrl} activeClassName="text-yellow-lighter underline">
          {" "}
          {link.linkName}
        </Link>
      </NavLink>
    ))
  }
  return (
    <StyledNav className="text-xl sm:text-lg">
      <MenuButton
        open={open}
        onClick={(e) => toggleNavbar()}
        title="click to open navigation"
      >
        Menu
      </MenuButton>
      <NavLinks open={open} isMD={isMD}>
        {renderLinks()}
      </NavLinks>
    </StyledNav>
  )
}

export default Navbar

/// Styled Components

const StyledNav = styled.nav.attrs((props) => ({
  ...props,
  className: cls(
    "flex flex-col py-2 sm:py-4 transition duration-150 ease-in-out",
    props.className
  ),
}))``
const NavLinks = styled.ul.attrs<{ isMD: boolean; open: boolean }>((props) => ({
  ...props,
  className: cls(
    "flex flex-col w-full justify-evenly sm:w-3/4 md:w-1/2 sm:flex-row items-center sm:mx-auto p-4 sm:p-2",
    cls({
      hidden: !props.isMD && !props.open,
    }),
    props.className
  ),
}))``
const NavLink = styled.li.attrs((props) => ({
  ...props,
  className: cls("my-2", props.className),
}))``

const MenuButton = styled.button.attrs<{ open: boolean }>((props) => ({
  ...props,
  className: cls(
    "text-yellow  border-yellow border-2 rounded-md p-2 m-2 sm:hidden self-end focus:bg-yellow-lighter focus:text-nightBlue focus:outline-none",
    {
      "bg-yellow-lighter": props.open,
      "text-nightBlue": props.open,
    },
    props.className
  ),
}))``
