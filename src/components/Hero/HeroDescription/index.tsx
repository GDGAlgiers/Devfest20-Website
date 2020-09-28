import React, { ReactElement } from "react"
import styled from "styled-components"
import cls from "classnames"
import Button from "../../common/Button/Button"

function HeroDescription(): ReactElement {
  return (
    <div className="bg-nightBlue text-white flex flex-col px-12 py-8 ">
      <DescriptionText>
        Join a global community of developers celeberating coding!
      </DescriptionText>

      <div className="flex flex-row justify-between">
        <HeroButton
          className="bg-blue "
          onClick={() => console.log("Register")}
        >
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
  className: cls("py-3", "text-xl", "px-16"),
}))``

export default HeroDescription
