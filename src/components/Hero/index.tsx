import React, { ReactElement } from "react"
import HeroCard from "./HeroCard"
import styled from "styled-components"
import Section, { WithDotsBackgroundContainer } from "../common/layout/Section"

function heroSection(): ReactElement {
  return (
    <Section id="hero" className="bg-nightBlue">
      <WithDotsBackgroundContainer>
        <div className="w-full flex flex-row justify-center">
          <div className=" text-white bg-nightBlue self-stretch mr-64 ">
            <img
              src={require("../../assets/svgs/globe.svg")}
              alt="Glob"
              className="w-24"
            />
          </div>
          <HeroCard containerClassName="mt-32 mr-64"></HeroCard>
        </div>
      </WithDotsBackgroundContainer>
    </Section>
  )
}

export default heroSection
