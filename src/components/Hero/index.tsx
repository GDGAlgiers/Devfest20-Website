import React, { ReactElement } from "react"
import HeroCard from "./HeroCard"
import Section, { WithDotsBackgroundContainer } from "../common/layout/Section"

function heroSection(): ReactElement {
  return (
    <Section id="hero" className="bg-nightBlue">
      <WithDotsBackgroundContainer>
        <div>
          <HeroCard></HeroCard>
        </div>
      </WithDotsBackgroundContainer>
    </Section>
  )
}

export default heroSection
