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
          <div className="w-full  xl:w-10/12   m-auto flex flex-col lg:flex-row  justify-evenly">
            <AgendaCard
              containerClassName="mb-6 lg:mb-0 lg:mr-20 flex-1"
              header="<DayOne/ >"
              items={[
                {
                  startHour: "12h:30",
                  endHour: "13h:00",
                  name: "Openning Ceremony",
                },
                {
                  startHour: "13h00",
                  endHour: "14h:00",
                  name: "Privacy-Preserving Machine Learning By Ayoub benaissa",
                },
                {
                  startHour: "14h00",
                  endHour: "15h:00",
                  name: "How to keep kids safe online By Abdulaziz Alhammadi",
                },
                {
                  startHour: "15h00",
                  endHour: "16h:00",
                  name:
                    "Running Serverless apps on GCP with Cloud Run By Abdelfettah Sghiour",
                },
                {
                  startHour: "16h00",
                  endHour: "17h:00",
                  name:
                    " كيف تخذلين المجرم الالكتروني عن طريق الهندسة الاجتماعية العكسية ",
                },
                {
                  startHour: "17h00",
                  endHour: "18h:00",
                  name: "Is the world smarter using IOT? By benhamida Fatima",
                },
                {
                  startHour: "17h00",
                  endHour: "18h:00",
                  name: "Formation Design thinking for kids",
                },
                {
                  startHour: "18h00",
                  endHour: "19h:00",
                  name: "Gender equity in tech Workshop",
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
                  startHour: "12h00",
                  endHour: "13h:00",
                  name: "Design Thinking for AI based apps By Asmaa Ibrahim",
                },
                {
                  startHour: "13h00",
                  endHour: "14h:00",
                  name:
                    "Interesting facts about Jetpack Compose - Alpha Edition By Oussama Haffersas",
                },
                {
                  startHour: "14h00",
                  endHour: "15h:00",
                  name: "Women Can code Panel",
                },
                {
                  startHour: "15h00",
                  endHour: "16h:00",
                  name: "AI & Deep Tech Innovation in Africa by Karim Beguir",
                },
                {
                  startHour: "16h00",
                  endHour: "17h:00",
                  name: "Flutter Fire : Query like a hero By Meys el haraki  ",
                },
                {
                  startHour: "15h00",
                  endHour: "17h:00",
                  name: "Design thinking compétition for kids",
                },
                {
                  startHour: "17h00",
                  endHour: "18h:00",
                  name: "closing ceremony",
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
          <div className="w-full  xl:w-10/12 flex justify-center lg:justify-end text-center lg:text-right m-auto items-center text-sm text-white opacity-75 xl:pl-10 pb-12">
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
