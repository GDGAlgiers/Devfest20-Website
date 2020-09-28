import React, { ReactElement } from "react"
import HeroCard from "./HeroCard"
import HeroDescription from "./HeroDescription"
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
          <div
            className="flex flex-col justify-center "
            style={{
              maxWidth: 560,
            }}
          >
            <HeroCard />
            <HeroDescription></HeroDescription>
          </div>
        </div>
      </WithDotsBackgroundContainer>
    </Section>
  )
}

export default heroSection
