import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import Card, { CardProps } from "../common/Card/Card"
import { H3 } from "../typography/typography"
import cls from "classnames"
interface AgendaProps {
  header?: string
  cardOptions: CardProps
}

function AgendaCard({ header, cardOptions }: AgendaProps): ReactElement {
  const [showText, setShowText] = useState(false)

  return (
    <div
      className="inline-block transition-all ease-in-out duration-500"
      onMouseEnter={(e) => setShowText(true)}
      onMouseLeave={(e) => setShowText(false)}
    >
      {" "}
      <Card
        {...cardOptions}
        contentAreaClassName={cls(cardOptions.contentAreaClassName, "p-10")}
        containerStyle={{
          width: 400,
        }}
      >
        <HeaderText>{header}</HeaderText>
        <ContentText show={showText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          error labore magni quidem repudiandae. Consequatur pariatur provident
          amet, laudantium ipsam animi laborum error quibusdam eum aut. Mollitia
          facilis rerum assumenda.
        </ContentText>
      </Card>
    </div>
  )
}

export default AgendaCard

/// Styled Components
const HeaderText = styled(H3).attrs((props) => ({
  ...props,
  className: cls(),
}))``
const ContentText = styled.p.attrs<{ show: boolean }>((props) => ({
  ...props,
  className: cls("text-center mt-2 origin-bottom-right transform", {
    "scale-0": !props.show,
    "scale-1": props.show,
    hidden: !props.show,
  }),
}))``
