import React, {
  ReactElement,
  ReactSVG,
  SVGProps,
  useLayoutEffect,
  useState,
} from "react"
import styled from "styled-components"
import cls from "classnames"
import { LARGE, useAtleastLarge } from "../../utils/medias"
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
  {
    linkName: "Register",
    linkUrl: "/register/challenges",
  },
]
interface NavBarProps {
  className?: string
}
function Navbar({ className }: NavBarProps): ReactElement {
  /// when true it means the screen is atleast 640px wide
  const isLG = useAtleastLarge()
  const [open, setOpen] = useState(false)
  /// If it detects that the device is small screen device, it sets the navbar to closed
  useLayoutEffect(() => {
    if (!isLG) setOpen(false)
  }, [])
  /// When screen size changes it closes or opens the navbar accordingly
  useLayoutEffect(() => {
    if (!isLG && open) return setOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLG])
  const toggleNavbar = () => setOpen(!open)
  const renderLinks = () => {
    return links.map((link) => (
      <NavLink key={link.linkName}>
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
        <DownArrowSVG
          className="max-h-full max-w-full"
          fill="#FBBC04"
        ></DownArrowSVG>
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
  @media ${LARGE} {
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
    "text-yellow transition-all duration-500 ease  p-2 mr-4 lg:hidden self-end focus:outline-none w-12 h-12",
    {
      "menu-flip": props.open,
    },
    props.className
  ),
}))`
  &.menu-flip {
    transform: rotateZ(180deg);
  }
`

function DownArrowSVG(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M506.157 132.386c-7.803-7.819-20.465-7.831-28.285-.029l-207.73 207.299c-7.799 7.798-20.486 7.797-28.299-.015L34.128 132.357c-7.819-7.803-20.481-7.79-28.285.029-7.802 7.819-7.789 20.482.029 28.284l207.701 207.27c11.701 11.699 27.066 17.547 42.433 17.547 15.358 0 30.719-5.846 42.405-17.533L506.128 160.67c7.818-7.802 7.831-20.465.029-28.284z" />
    </svg>
  )
}
