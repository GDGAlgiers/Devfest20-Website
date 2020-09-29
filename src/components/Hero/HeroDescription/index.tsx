import React, { ReactElement } from "react"
import styled from "styled-components"
import cls from "classnames"
import Button from "../../common/Button/Button"

interface HeroDescriptionProps {
  containerClassName?: string
}

function HeroDescription({
  containerClassName,
}: HeroDescriptionProps): ReactElement {
  return (
    <div
      className={cls(
        "bg-nightBlue text-white flex flex-col px-6 lg:px-12 py-8  ",
        containerClassName
      )}
    >
      <DescriptionText>
        Join a global community of developers celeberating coding!
      </DescriptionText>

      <div className="flex flex-col justify-between lg:flex-row">
        <HeroButton className="bg-blue" onClick={() => console.log("Register")}>
          Register
        </HeroButton>
        <HeroButton className="bg-yellow" onClick={() => console.log("AGENDA")}>
          Agenda
        </HeroButton>
      </div>
    </div>
  )
}

const DescriptionText = styled.p.attrs((props) => ({
  ...props,
  className: cls("text-2xl", "mb-12", "font-medium"),
}))``

const HeroButton = styled(Button).attrs((props) => ({
  ...props,
  className: cls("py-3", "text-xl", "lg:px-12", "lg:my-0", "my-2", "px-6"),
}))``

export default HeroDescription
