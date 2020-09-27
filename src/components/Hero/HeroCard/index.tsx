import React, { ReactElement } from "react"
import cls from "classnames"
import Card from "../../common/Card/Card"
import { H3, H2, H1, H4, H5, H6 } from "../../typography/typography"
import styled from "styled-components"

interface HeroCardProps {
  containerClassName?: string
}

function HeroCard({ containerClassName }: HeroCardProps): ReactElement {
  return (
    <Card
      containerClassName={cls("bg-white", containerClassName)}
      topBarClassName={cls("bg-yellow")}
      contentAreaClassName={cls("px-12")}
    >
      <div>
        <div className="flex md:flex-row mt-10 justify-center items-start">
          <img
            src={require("../../../assets/svgs/gdgAlgiersLogo.svg")}
            alt="gdgAlgiers"
            className="w-16 mr-2"
          />
          <H5 className="font-hairline text-black-lighter">GDG Algiers</H5>
        </div>
        <HeaderText>devfest</HeaderText>

        <DateText>November 10th, 2020</DateText>
      </div>
    </Card>
  )
}

const HeaderText = styled(H3).attrs((props) => ({
  ...props,
  className: cls("text-nightBlue", "leading-none", "font-hairline", "mb-4"),
}))`
  font-size: 7.5rem;
`

const DateText = styled.p.attrs((props) => ({
  ...props,
  className: cls(
    "text-center",
    "text-xl",
    "text-black-lighter",
    "mb-6",
    "font-hairline"
  ),
}))``

export default HeroCard
