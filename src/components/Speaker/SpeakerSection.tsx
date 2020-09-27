import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import Section, { WithDotsBackgroundContainer } from "../common/layout/Section"
import cls from "classnames"
import { H1 } from "../typography/typography"
import SpeakerCard from "./SpeakerCard"
import { useAtleastLarge } from "../../utils/medias"

interface SpeakerInfos {
  speakerName?: string
  speakerField: string
  imageSpeaker?: string
  talkName?: string
  topBarColor?: string
}

interface Props {
  speakers: SpeakerInfos[]
}

function SpeakerSection({ speakers }: Props): ReactElement {
  const isLG = useAtleastLarge()
  const [iter, setIter] = useState(0)

  const getButtons = () => {
    let dots = []
    console.log(speakers.length)
    const section = speakers.length / 3
    console.log(section)
    for (let i = 0; i <= section; i++) {
      dots.push(
        <button
          className="bg-nightBlue p-2 mx-4 w-10 h-10"
          style={{
            boxShadow: "6px 6px 0px -2px rgba(0,0,0,0.5)",
          }}
        ></button>
      )
    }

    return dots
  }

  return (
    <Section id="speakers">
      <div className="w-full">
        <div>
          <div className="p-4 lg:mt-4 lg:ml-6">
            <H1 className="mb-4 font-light">Speakers</H1>
            <p className="text-xl">
              Join a global community of developers celebrating coding! Lorem
              ipsum
            </p>
          </div>
        </div>
        <div className="w-full">
          <div
            className="w-full h-0 relative"
            style={{
              top: "28px",
              left: "0",
            }}
          >
            <div
              className="absolute w-16 bg-nightBlueDark"
              style={{
                height: "450px",
                zIndex: "99",
                left: "0px",
              }}
            ></div>
            <div
              className="absolute w-16 bg-nightBlueDark"
              style={{
                height: "450px",
                zIndex: "99",
                right: "0px",
              }}
            ></div>
          </div>

          <div
            className="m-auto bg-gray p-16"
            style={{
              width: "97%",
            }}
          >
            <div
              className="w-full h-0 relative"
              style={{
                top: "-10px",
                left: "0",
              }}
            >
              <div
                className="bg-opacity-75 absolute w-16 bg-grayDark"
                style={{
                  height: "400px",
                  zIndex: "98",
                  left: "-4rem",
                }}
              ></div>
              <div
                className="bg-opacity-75 absolute w-16 bg-grayDark"
                style={{
                  height: "400px",
                  zIndex: "98",
                  right: "-4rem",
                }}
              ></div>
            </div>

            <div className="flex justify-around flex-wrap">
              {speakers.map((speaker, index) => {
                return (isLG && index >= iter && index <= iter + 2) ||
                  (!isLG && index <= iter) ? (
                  <SpeakerCard
                    speakerName={speaker.speakerName}
                    speakerField={speaker.speakerField}
                    talkName={speaker.talkName}
                    containerClassName="flex-1 w-64"
                    cardOptions={{
                      containerClassName: "text-nightBlue bg-white",
                      contentAreaClassName: "p-4 w-full",
                    }}
                    topBarColor={speaker.topBarColor}
                  />
                ) : (
                  ""
                )
              })}
            </div>
          </div>
        </div>

        <br />
        <div className="text-center mb-48">
          <button className="bg-gray p-3">
            <button
              className="p-2 previous shadow-lg border-nightBlue bg-yellow w-10 h-10"
              style={{
                boxShadow: "6px 6px 0px -2px rgba(0,0,0,0.5)",
              }}
            ></button>

            {getButtons()}

            <button
              className="p-2 w-10 h-10 next shadow-lg border-nightBlue bg-yellow"
              style={{
                boxShadow: "6px 6px 0px -2px rgba(0,0,0,0.5)",
              }}
            ></button>
          </button>
        </div>
      </div>
      <ThickBorder className="bg-red"></ThickBorder>
    </Section>
  )
}

export default SpeakerSection

/// Styled Components :

const ThickBorder = styled.div.attrs((props) => ({
  ...props,
  className: cls("w-full h-10"),
}))``
