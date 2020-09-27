import React, { ReactElement } from "react"
import DevfestCard from "./HeroCard"
import WithDotsBackgroundContainer from "../common/layout/Section"

function heroSection(): ReactElement {
  return (
    <section id="hero" className="bg-nightBlue">
      <WithDotsBackgroundContainer>
        <div>
          <DevfestCard></DevfestCard>
        </div>
      </WithDotsBackgroundContainer>
    </section>
  )
}

export default heroSection
