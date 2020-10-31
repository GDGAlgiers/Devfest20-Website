import React, { ReactElement, useLayoutEffect, useState } from "react"
import { useAtleastSmall } from "../../utils/medias"
import styled from "styled-components"
import Section from "../common/layout/Section"
import AboutCard from "./AboutCard"
import cls from "classnames"
import { H1 } from "../typography/typography"

interface Props {}

function AboutSection(props: Props): ReactElement {
  const isSM = useAtleastSmall()
  const [showCard, setShowCard] = useState(true)
  useLayoutEffect(() => {
    if (!isSM) setShowCard(false)
  }, [])
  useLayoutEffect(() => {
    if (!isSM && showCard) return setShowCard(false)
    else if (isSM && !showCard) return setShowCard(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSM]) //"flex flex-col text-nightBlue mr-20 ml-20"
  return (
    <Section id="about" className="bg-transparent p-4 sm:px-8 sm:py-12">
      <div className="flex flex-col  text-nightBlue mx-5 sm:mx-10">
        <Title>About Devfest</Title>
        <div className="flex flex-col pr-1 lg:flex-row h-auto">
          <Description>
            Devfest Algiers is one of the biggest annual events organised by GDG
            Algiers in order to celebrate tech with the community. This year's
            Devfest will last for two continuous days on the 13th and the 14th
            of November. These days will be full of interesting talks presented
            by a group of amazing experts and professionals, in addition to a
            competition that will allow developers to celebrate the developer
            festival by solving challenges in four different tracks, a panel
            brought to you by WTM Algiers and a ”Gender Equity In Tech”
            Workshop.
          </Description>
          {showCard && (
            <AboutCard
              containerClassName="lg:w-full xl:max-w-xl mt-3"
              contentAreaClassName="bg-nightBlue flex  pt-5 pb-4 "
              topBarColor="bg-yellow"
            />
          )}
        </div>
      </div>
    </Section>
  )
}

const Title = styled(H1).attrs((props) => ({
  className: cls("mb-4"),
}))``
const Description = styled.p.attrs((props) => ({
  className: cls(
    "lg:w-full font-medium lg:px-12 lg:text-3xl text-xl font-medium leading-tight lg:mr-10"
  ),
}))``

export default AboutSection
