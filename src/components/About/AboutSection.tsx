import React, { ReactElement, useLayoutEffect, useState } from "react"
import { useAtleastMedium } from "../../utils/medias"
import styled from "styled-components"
import Section from "../common/layout/Section"
import AboutCard from "./AboutCard"
import cls from "classnames"
import { H1 } from "../typography/typography"

interface Props {}

function AboutSection(props: Props): ReactElement {
  const isSM = useAtleastMedium()
  const [showCard, setShowCard] = useState(true)
  useLayoutEffect(() => {
    if (!isSM) setShowCard(false)
  }, [])
  useLayoutEffect(() => {
    if (!isSM && showCard) return setShowCard(false)
    else if (isSM && !showCard) return setShowCard(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSM])
  return (
    <Section id="#about" className="bg-transparent">
      <div className="flex flex-col text-nightBlue  mr-20 ml-20">
        <H1 className=" mb-4 font-light">About Devfest</H1>
        <div className="flex h-auto">
          <Description>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?"
          </Description>
          {showCard && (
            <AboutCard
              containerClassName="mt-8  w-full max-w-xl"
              contentAreaClassName="bg-nightBlue flex  pt-4 pb-3 "
              topBarColor="bg-yellow"
            />
          )}
        </div>
      </div>
    </Section>
  )
}

const Description = styled.p.attrs({
  className: "mr-10 w-full font-medium leading-tight",
})`
  height: max-content;
  font-size: 22px;
`

export default AboutSection
