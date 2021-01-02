import React, { ReactElement } from "react"
import HeroCard from "./HeroCard"
import HeroDescription from "./HeroDescription"
import cls from "classnames"
import Button from "../common/Button/Button"
import styled from "styled-components"
import { navigate } from "gatsby"
import Section, { WithDotsBackgroundContainer } from "../common/layout/Section"

interface HeroSectionProps {}

function heroSection(props: HeroSectionProps): ReactElement {
  return (
    <Section
      id="hero"
      className="w-full flex flex-row justify-center items-start h-full "
    >
      <WithDotsBackgroundContainer
        className={cls(
          "bg-nightBlue  h-auto min-h-screen flex justify-center items-start pt-32"
        )}
      >
        <div
          className="w-full   flex flex-col justify-start"
          style={{
            maxWidth: 1400,
          }}
        >
          <div className="hidden md:flex justify-center text-white bg-nightBlue self-start py-12 px-12 mr-40">
            <img
              src={require("../../assets/svgs/globe.svg")}
              alt="Glob"
              className="w-32"
            />
          </div>
          <div className="flex flex-row justify-between flex-1 lg:mx-0 lg:w-auto w-full mx-auto  ">
            <div className="flex flex-col mb-6 mt-4">
              <div className="bg-nightBlue text-white-lighter flex-1 flex flex-col justify-center">
                <ThanksText
                  style={{
                    maxWidth: 700,
                  }}
                >
                  Thank you for attending Devfest Algiers 2020 which was held
                  Virtually in 13-14 November
                </ThanksText>
              </div>

              <FeaturedSessionButton
                style={{
                  maxWidth: 380,
                }}
                onClick={() => navigate("#agenda")}
              >
                Check out featured sessions
              </FeaturedSessionButton>
            </div>
            <HeroCard />
            {/**
             * <HeroDescription containerClassName="mb-16"></HeroDescription>
             */}
          </div>
        </div>
      </WithDotsBackgroundContainer>
    </Section>
  )
}
const ThanksText = styled.p.attrs((props) => ({
  ...props,
  className: cls("text-white-lighter", "text-3xl", "font-semibold"),
}))``
const FeaturedSessionButton = styled(Button).attrs((props) => ({
  ...props,
  className: cls(
    "bg-yellow",
    "py-4",
    "px-4",
    "text-2xl",
    "items-start",
    "font-medium",
    "text-white-lighter"
  ),
}))``
export default heroSection
