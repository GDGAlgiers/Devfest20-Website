import React, { ReactElement } from "react"
import HeroCard from "./HeroCard"
import HeroDescription from "./HeroDescription"
import styled from "styled-components"
import Section, { WithDotsBackgroundContainer } from "../common/layout/Section"

function heroSection(): ReactElement {
  return (
    <Section id="hero" className="bg-nightBlue">
      <WithDotsBackgroundContainer className="flex flex-row justify-center">
        <div
          className="w-full flex flex-row justify-start"
          style={{
            maxWidth: 1300,
          }}
        >
          <div className=" text-white bg-nightBlue self-start py-12 mr-64">
            <img
              src={require("../../assets/svgs/globe.svg")}
              alt="Glob"
              className="w-24"
            />
          </div>
          <div
            className="flex flex-col justify-center flex-1"
            style={{
              maxWidth: 540,
            }}
          >
            <HeroCard containerClassName="mt-32 " />
            <HeroDescription containerClassName="mb-16"></HeroDescription>
          </div>
        </div>
      </WithDotsBackgroundContainer>
    </Section>
  )
}

export default heroSection
