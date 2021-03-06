import React, { ReactElement } from "react"
import styled from "styled-components"
import Section from "../common/layout/Section"
import cls from "classnames"
import { H1 } from "../typography/typography"
import ChallengeCard from "./ChallengeCard"
import challenges from "../../utils/challenges"
interface Props {}

function ChallengesSection(props: Props): ReactElement {
  return (
    <Section id="challenges" className="bg-nightBlue">
      <ThickBorder className="bg-red"></ThickBorder>
      <div>
        <div className="flex flex-col w-full  m-auto px-6 py-4 md:flex-row md:w-7/8 sm:px-6 sm:py-2 lg:px-20">
          <div className="p-4 lg:mt-4 lg:ml-6 bg-nightBlue">
            <H1 className="text-white mb-4 font-light">Challenges</H1>
            <p className="text-white text-xl">Multiple Tracks to compete on</p>
          </div>
        </div>
        <div className="mt-20 mb-32 lg:mb-0 md:mb-0  mx-auto grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-y-32 gap-x-0 lg:w-2/3 max-w-full">
          {challenges.map((challenge, i) => (
            <div
              className={cls("mx-auto", {
                "md:col-span-auto lg:col-span-2 sm:col-span-auto": i === 4,
              })}
              key={i}
              onClick={() => (window.location.href = challenge.link)}
            >
              <ChallengeCard
                cardOptions={{}}
                dark={challenge.dark}
                secondaryColor={challenge.secondaryColor}
                logos={challenge.logos}
                icon={challenge.icon}
                headerText={challenge.name}
                bodyText={challenge.description}
                actionText="Participate Now!"
                narrowCard={challenge.narrowCard}
              />
            </div>
          ))}
        </div>
        <div
          className="hidden mb-10 self-stretch ml-auto text-white md:flex justify-center items-center bg-nightBlue md:mr-10"
          style={{
            width: 200,
          }}
        >
          <img
            src={require("../../assets/pngs/dinosor1.png")}
            alt="globe"
            className="max-h-full max-w-full"
          />
        </div>
      </div>
      <ThickBorder className="bg-green"></ThickBorder>
    </Section>
  )
}

export default ChallengesSection

/// Styled Components :
const ThickBorder = styled.div.attrs((props) => ({
  ...props,
  className: cls("w-full h-10"),
}))``
