import React, { ReactElement } from "react"
import styled from "styled-components"
import Section, { WithDotsBackgroundContainer } from "../common/layout/Section"
import cls from "classnames"
import { H1 } from "../typography/typography"
import AgendaCard from "./AgendaCard"
import { useAtleastLarge } from "../../utils/medias"
interface Props {}

function AgendaSection(props: Props): ReactElement {
  const isLG = useAtleastLarge()
  return (
    <Section id="agenda" className="bg-nightBlue">
      <ThickBorder className="bg-yellow"></ThickBorder>
      <WithDotsBackgroundContainer>
        <div className="flex flex-col w-full  m-auto px-6 py-4 md:flex-row md:w-7/8 sm:px-6 sm:py-2 lg:px-20">
          <div className="p-4 lg:mt-4 lg:ml-6 bg-nightBlue">
            <H1 className="text-white mb-4 font-light">Agenda</H1>
            <p className="text-white text-xl">
              Don’t miss a minute of Devfest: we will be adding more sessions
              and speakers
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
        <div className="w-full">
          <div
            className="w-full  xl:w-8/12   m-auto flex flex-col lg:flex-row  justify-evenly items-center "
            style={{
              maxWidth: 960,
            }}
          >
            <AgendaCard
              containerClassName="mb-6 lg:mb-0 lg:mr-20 flex-1"
              header="<DayOne/ >"
              items={[
                {
                  startHour: "10h00",
                  endHour: "11h:00",
                  name: "Openning Ceremony",
                },
                {
                  startHour: "10h00",
                  endHour: "11h:00",
                  name: "Openning Ceremony",
                },
                {
                  startHour: "10h00",
                  endHour: "11h:00",
                  name: "Openning Ceremony",
                },
                {
                  startHour: "10h00",
                  endHour: "11h:00",
                  name: "Openning Ceremony",
                },
                {
                  startHour: "10h00",
                  endHour: "11h:00",
                  name: "Openning Ceremony",
                },
              ]}
              cardOptions={{
                containerClassName: "text-nightBlue bg-white",
                contentAreaClassName: "p-8",
              }}
              topBarColor="bg-yellow"
              hoverTopBarColor="bg-green"
            />
            <AgendaCard
              containerClassName="flex-1"
              items={[
                {
                  startHour: "10h00",
                  endHour: "11h:00",
                  name: "Openning Ceremony",
                },
                {
                  startHour: "10h00",
                  endHour: "11h:00",
                  name: "Openning Ceremony",
                },
                {
                  startHour: "10h00",
                  endHour: "11h:00",
                  name: "Openning Ceremony",
                },
                {
                  startHour: "10h00",
                  endHour: "11h:00",
                  name: "Openning Ceremony",
                },
                {
                  startHour: "10h00",
                  endHour: "11h:00",
                  name: "Openning Ceremony",
                },
              ]}
              header="<DayTwo/ >"
              cardOptions={{
                containerClassName: "text-nightBlue bg-white",
                contentAreaClassName: "p-8",
              }}
              topBarColor="bg-yellow"
              hoverTopBarColor="bg-green"
            />
          </div>
          <div
            className="w-full  xl:w-8/12 flex justify-center lg:justify-end text-center lg:text-right m-auto items-center text-sm text-white opacity-75 xl:pl-10 pb-12"
            style={{
              maxWidth: 960,
            }}
          >
            🛈 {!isLG ? "Click" : "Hover"} to check detailed agenda
          </div>
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
