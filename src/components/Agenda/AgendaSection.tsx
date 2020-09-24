import React, { ReactElement } from "react"
import styled from "styled-components"
import Section from "../common/layout/Section"
import cls from "classnames"
import { H1 } from "../typography/typography"
import AgendaCard from "./AgendaCard"
import { LARGE } from "../../utils/medias"
interface Props {}

function AgendaSection(props: Props): ReactElement {
  return (
    <Section id="#agenda" className="bg-nightBlue">
      <ThickBorder className="bg-yellow"></ThickBorder>
      <div className="w-full p-1">
        <Container className="w-full">
          <div className="flex flex-col w-full  m-auto px-6 py-4 sm:flex-row sm:px-6 sm:py-4 lg:px-20">
            <div className="p-10  bg-nightBlue">
              <H1 className="text-white mb-4 font-light">Agenda</H1>
              <p className="text-white text-xl">
                Join a global community of developers celebrating coding! Lorem
                ipsum
              </p>
            </div>
            <div
              className="hidden  self-stretch ml-auto text-white md:flex justify-center items-center bg-nightBlue"
              style={{
                width: 200,
                height: 200,
              }}
            >
              <img
                src={require("../../assets/svgs/globe.svg")}
                alt="globe"
                className="max-h-full max-w-full"
              />
            </div>
          </div>
          <div className="w-full xl:w-1/2 m-auto flex flex-col sm:flex-row p-10 justify-evenly items-center pb-20">
            <AgendaCard
              header="< /DayOne>"
              cardOptions={{
                containerClassName: "text-nightBlue bg-white",
                contentAreaClassName: "p-10",
              }}
              topBarColor="bg-yellow"
              hoverToBarColor="bg-green"
            />
            <AgendaCard
              header="< /DayTwo>"
              cardOptions={{
                containerClassName: "text-nightBlue bg-white",
                contentAreaClassName: "p-10",
              }}
              topBarColor="bg-yellow"
              hoverToBarColor="bg-green"
            />
          </div>
        </Container>
      </div>
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

const Container = styled.div`
  background-image: url(${require("../../assets/svgs/bgDots.svg")});
  background-repeat: repeat;
  background-size: 100vw;
  @media ${LARGE} {
    background-repeat: no-repeat;
    background-size: 100vw;
    background-position-y: -5%;
    background-position-x: 40%;
  }
`
