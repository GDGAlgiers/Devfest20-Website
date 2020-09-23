import React, { ReactElement, useLayoutEffect, useState } from "react"
import styled from "styled-components"
import cls from "classnames"
import { SMALL, useAtleastSmall } from "../../utils/medias"
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
interface NavBarProps {
  className?: string
}
function Navbar({ className }: NavBarProps): ReactElement {
  /// when true it means the screen is atleast 640px wide
  const isSM = useAtleastSmall()
  const [open, setOpen] = useState(false)
  /// If it detects that the device is small screen device, it sets the navbar to closed
  useLayoutEffect(() => {
    if (!isSM) setOpen(false)
  }, [])
  /// When screen size changes it closes or opens the navbar accordingly
  useLayoutEffect(() => {
    if (!isSM && open) return setOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSM])
  const toggleNavbar = () => setOpen(!open)
  const renderLinks = () => {
    return links.map((link) => (
      <NavLink>
        <Link to={link.linkUrl} activeClassName="text-yellow-lighter underline">
          {link.linkName}
        </Link>
      </NavLink>
    ))
  }
  return (
    <StyledNav className={className}>
      <MenuButton
        open={open}
        onClick={(e) => toggleNavbar()}
        title="click to open navigation"
      >
        Menu
      </MenuButton>
      <NavLinks open={open}>{renderLinks()}</NavLinks>
    </StyledNav>
  )
}

export default Navbar

/// Styled Components

const StyledNav = styled.nav.attrs((props) => ({
  ...props,
  className: cls(
    "flex flex-col py-2 sm:py-4 text-2xl sm:text-xl",
    props.className
  ),
}))``
const NavLinks = styled.ul.attrs<{ open: boolean }>((props) => {
  const { open } = props
  return {
    ...props,
    className: cls(
      "flex flex-col w-full justify-evenly sm:w-3/4 lg:w-1/2 sm:flex-row items-center sm:mx-auto p-4 transition-all duration-500 linear",
      cls({
        collapsed: !open,
        open: open,
      }),
      props.className
    ),
  }
})`
  &.collapsed {
    max-height: 0px;
    overflow-y: hidden;
    padding: 0;
  }
  &.open {
    max-height: 100vh;
    overflow-y: visible;
  }
  @media ${SMALL} {
    &.collapsed {
      max-height: 100vh;
      overflow-y: visible;
    }
  }
`
const NavLink = styled.li.attrs((props) => ({
  ...props,
  className: cls(
    "my-2 hover:text-yellow transition-all duration-500 ease",
    props.className
  ),
}))``

const MenuButton = styled.button.attrs<{ open: boolean }>((props) => ({
  ...props,
  className: cls(
    "text-yellow transition-all duration-500 ease border-yellow border-2 rounded-md p-2 m-2 sm:hidden self-end focus:outline-none",
    {
      "bg-yellow-lighter": props.open,
      "text-nightBlue": props.open,
    },
    props.className
  ),
}))``
