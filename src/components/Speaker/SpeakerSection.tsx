import React, { ReactElement, useState } from "react"
import styled, { keyframes } from "styled-components"
import Section from "../common/layout/Section"
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
  const [selected, setSelected] = useState(0)
  const [animate, setAnimate] = useState(true)

  const nextSet = async () => {
    if (
      (isLG && (selected + 1) * 3 < speakers.length) ||
      (!isLG && selected + 1 < speakers.length)
    ) {
      await anim(false)
      await setSelected(selected + 1)
      await anim(true)
    }
  }

  const goToSet = async (num: number) => {
    await anim(false)
    await setSelected(num)
    await anim(true)
  }

  function anim(value: boolean): Promise<boolean> {
    setAnimate(value)
    return new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(value), 300)
    })
  }

  const prevSet = async () => {
    if (selected > 0) {
      await anim(false)
      await setSelected(selected - 1)
      await anim(true)
    }
  }

  return (
    <Section id="speakers">
      <div className="w-full pt-16">
        <div>
          <div className="p-4 lg:mt-4 lg:ml-6 text-nightBlue">
            <H1 className="mb-4 lg:pl-20 pl-5">Speakers</H1>
            <p className="lg:pl-20 pl-5 text-xl">
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
                zIndex: "3",
                left: "0px",
              }}
            ></div>
            <div
              className="absolute w-16 bg-nightBlueDark"
              style={{
                height: "450px",
                zIndex: "3",
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
                  zIndex: "2",
                  left: "-4rem",
                }}
              ></div>
              <div
                className="bg-opacity-75 absolute w-16 bg-grayDark"
                style={{
                  height: "400px",
                  zIndex: "2",
                  right: "-4rem",
                }}
              ></div>
            </div>
            <div className="flex justify-around flex-wrap">
              {speakers
                .filter((speaker, index) => {
                  return (
                    (isLG &&
                      index >= selected * 3 &&
                      index < selected * 3 + 3) ||
                    (!isLG && index === selected)
                  )
                })
                .map((speaker, index) => {
                  return (
                    <SpeakerAnimation disp={animate}>
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
                        imageSpeaker={speaker.imageSpeaker}
                      />
                    </SpeakerAnimation>
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
              name="previous speakers"
              onClick={() => {
                prevSet()
              }}
            ></button>

            {speakers
              .filter((speaker, index) => {
                return isLG && index % 3 === 0
              })
              .map((speaker, index) => {
                console.log(index)
                return (
                  <button
                    className={
                      (selected === index ? "bg-nightBlue" : "bg-white") +
                      " border-nightBlue p-2 ml-5 w-10 h-10"
                    }
                    name="speakers"
                    style={{
                      boxShadow: "6px 6px 0px -2px rgba(0,0,0,0.5)",
                    }}
                    onClick={() => goToSet(index)}
                  ></button>
                )
              })}

            <button
              className="p-2 w-10 h-10 ml-5 next shadow-lg border-nightBlue bg-yellow"
              style={{
                boxShadow: "6px 6px 0px -2px rgba(0,0,0,0.5)",
              }}
              name="next speakers"
              onClick={() => {
                nextSet()
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

const Apparition = keyframes`
  0% {
    transform: translateX(300px);
    opacity: 0;
  }
  100% {
    transform: translate(0px,0px);
    opacity: 1;
  }`

const ThickBorder = styled.div.attrs((props) => ({
  ...props,
  className: cls("w-full h-10"),
}))``

const SpeakerAnimation = styled.div.attrs<{ disp: boolean }>((props) => ({
  ...props,
  className: cls("transition-all ease duration-200 text-center", {
    animate: props.disp,
    resetanimate: !props.disp,
  }),
}))`
  &.resetanimate {
    opacity: 0;
    transform: translateX(300px);
  }
  &.animate {
    opacity: 1;
    transform: translateX(0px);
  }
`
