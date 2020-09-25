import React, { ReactElement } from "react"
import styled from "styled-components"
import Section, { WithDotsBackgroundContainer } from "../common/layout/Section"
import cls from "classnames"
import { H1 } from "../typography/typography"
import AgendaCard from "./AgendaCard"
interface Props {}

function AgendaSection(props: Props): ReactElement {
  return (
    <Section id="#agenda" className="bg-nightBlue">
      <ThickBorder className="bg-yellow"></ThickBorder>
      <WithDotsBackgroundContainer>
        <div className="flex flex-col w-full  m-auto px-6 py-4 md:flex-row md:w-7/8 sm:px-6 sm:py-2 lg:px-20">
          <div className="p-4 lg:mt-4 lg:ml-6 bg-nightBlue">
            <H1 className="text-white mb-4 font-light">Agenda</H1>
            <p className="text-white text-xl">
              Join a global community of developers celebrating coding! Lorem
              ipsum
            </p>
          </div>
          <div
            className="hidden  self-stretch ml-auto text-white md:flex justify-center items-center bg-nightBlue md:mr-10"
            style={{
              width: 200,
            }}
          >
            <img
              src={require("../../assets/svgs/hourglass.svg")}
              alt="globe"
              className="max-h-full max-w-full"
            />
          </div>
        </div>
        <div className="w-full  xl:w-9/12  m-auto flex flex-col lg:flex-row md:px-10 justify-evenly items-center ">
          <AgendaCard
            containerClassName="mb-6 lg:mb-0 lg:mr-4 flex-1"
            header="< /DayOne>"
            cardOptions={{
              containerClassName: "text-nightBlue bg-white",
              contentAreaClassName: "p-10",
            }}
            topBarColor="bg-yellow"
            hoverToBarColor="bg-green"
          />
          <AgendaCard
            containerClassName="flex-1"
            header="< /DayTwo>"
            cardOptions={{
              containerClassName: "text-nightBlue bg-white",
              contentAreaClassName: "p-10",
            }}
            topBarColor="bg-yellow"
            hoverToBarColor="bg-green"
          />
        </div>
        <div className="w-full  xl:w-9/12 flex justify-center md:justify-end text-center md:text-right m-auto items-center text-white opacity-75 md:px-10 pb-12">
          {" "}
          🛈 Hover to check detailed agenda
        </div>
      </WithDotsBackgroundContainer>
      <ThickBorder className="bg-blue"></ThickBorder>
    </Section>
  )
}

export default AgendaSection

/// Styled Components :

const ThickBorder = styled.div.attrs((props) => ({
  ...props,
  className: cls("w-full h-10"),
}))``