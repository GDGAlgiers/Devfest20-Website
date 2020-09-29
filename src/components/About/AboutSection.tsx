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
      <div className="flex flex-col  text-nightBlue mx-5 sm:mx-20">
        <Title>About Devfest</Title>
        <div className="flex flex-col lg:flex-row h-auto">
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dicta
            nobis optio nostrum! Aspernatur earum hic veniam itaque saepe alias?
            Fugiat dolorum cumque eius reprehenderit inventore velit ab vel
            minus. Sequi mollitia, voluptate nobis, cupiditate enim fugiat
            obcaecati blanditiis iure quae nam quas unde exercitationem
            doloribus eum libero eaque vel porro. Maxime labore temporibus
            impedit dolorem tempora recusandae hic libero. Quas nisi optio at
            vel aperiam recusandae culpa quae quibusdam natus fuga, excepturi
            mollitia, blanditiis quod a exercitationem molestias dolorem
            quaerat, nihil quidem? Obcaecati nesciunt, accusamus culpa delectus
            deleniti adipisci? Facilis cum ratione at, corporis sequi sit
            doloribus ad quasi, fugit nobis numquam amet modi? Magnam quidem
            blanditiis nobis, ducimus architecto ipsa vel pariatur unde et
            placeat commodi sit non?
          </Description>
          {showCard && (
            <AboutCard
              containerClassName="lg:w-full xl:max-w-lg"
              contentAreaClassName="bg-nightBlue flex  pt-4 pb-3 "
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
  className: cls("w-full font-medium text-2xl leading-tight lg:mr-10"),
}))``

export default AboutSection
