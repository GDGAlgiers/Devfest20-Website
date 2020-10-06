import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import Section from "../common/layout/Section"
import cls from "classnames"
import { H1 } from "../typography/typography"
import { useAtleastLarge } from "../../utils/medias"
import Card from "../common/Card/Card"
import { H3, H5 } from "../typography/typography"

import SponsorLogo from "./SponsorLogo"

interface SponsorInfos {
  sponsorLogo?: string
}

interface Props {
  sponsors: SponsorInfos[]
}

function SponsorsSection({ sponsors }: Props): ReactElement {
  const isLG = useAtleastLarge()
  const [selected, setSelected] = useState(0)
  const [animate, setAnimate] = useState(true)

  return (
    <Section id="sponsors">
      <div className="w-full pt-16 mb-20">
        <div>
          <div className="p-4 lg:mt-4 lg:ml-6 text-nightBlue">
            <H1 className="mb-4 lg:pl-20 pl-5 font-light">Sponsors</H1>
            <p className="lg:pl-20 pl-5 text-xl">
              Join a global community of developers celebrating coding! Lorem
              ipsum
            </p>
          </div>
          <br />
          <div className="w-full lg:w-9/12 m-auto">
            <Card
              containerClassName={cls("bg-white border-white border-2")}
              topBarClassName={cls("bg-yellow p-4 border-white border-4")}
              contentAreaClassName={cls(
                "lg:px-12 bg-nightBlue border-4 border-white",
                "sm:px-0"
              )}
            >
              <div>
                <div className="mt-6 flex md:flex-row pt-8 pb-2 justify-center items-start">
                  <img
                    src={require("../../assets/svgs/gdgAlgiersLogoWhite.svg")}
                    alt="gdgAlgiers"
                    className="w-20 mr-2"
                  />
                  <H5 className="text-3xl font-hairline text-white-lighter">
                    GDG Algiers
                  </H5>
                </div>
                <img
                  src={require("../../assets/svgs/devfest.svg")}
                  alt="gdgAlgiers"
                  className="mt-5"
                  style={{
                    width: "400px",
                  }}
                />

                <H5 className="text-1xl mt-16 text-center font-hairline text-white-lighter">
                  Powered by
                </H5>
              </div>
              <div className="w-full mt-16 flex justify-around flex-wrap mb-20">
                {sponsors.map((sponsor) => {
                  return (
                    <div className="w-56 h-56 m-5">
                      <SponsorLogo sponsorLogo={sponsor.sponsorLogo} />
                    </div>
                  )
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
      <ThickBorder className="bg-red"></ThickBorder>
    </Section>
  )
}

export default SponsorsSection

/// Styled Components :
const ThickBorder = styled.div.attrs((props) => ({
  ...props,
  className: cls("w-full h-10"),
}))``

const HeaderText = styled(H3).attrs((props) => ({
  ...props,
  className: cls("text-yellow", "leading-none", "font-hairline", "mb-4"),
}))``

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
