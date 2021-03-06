import React, { ReactElement } from "react"
import HeroCard from "./HeroCard"
import HeroDescription from "./HeroDescription"
import cls from "classnames"
import Section, { WithDotsBackgroundContainer } from "../common/layout/Section"

interface HeroSectionProps {}

function heroSection(props: HeroSectionProps): ReactElement {
  return (
    <WithDotsBackgroundContainer
      className={cls(
        "bg-nightBlue  h-auto min-h-screen flex justify-center items-center"
      )}
    >
      <Section id="hero" className="w-full flex flex-row justify-center h-full">
        <div
          className="w-full   flex flex-row justify-start"
          style={{
            maxWidth: 1300,
          }}
        >
          <div className="hidden md:flex justify-center text-white bg-nightBlue self-start py-12 px-12 mr-40">
            <img
              src={require("../../assets/svgs/globe.svg")}
              alt="Glob"
              className="w-32"
            />
          </div>
          <div
            className="flex flex-col justify-center flex-1 lg:mx-0 lg:w-auto w-full mx-auto  "
            style={{
              maxWidth: 500,
            }}
          >
            <HeroCard containerClassName="mt-32 " />
            <HeroDescription containerClassName="mb-16"></HeroDescription>
          </div>
        </div>
      </Section>
    </WithDotsBackgroundContainer>
  )
}

export default heroSection
