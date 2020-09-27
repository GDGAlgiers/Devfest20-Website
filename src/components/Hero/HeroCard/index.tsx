import React, { ReactElement } from "react"
import cls from "classnames"
import Card from "../../common/Card/Card"

interface HeroCardProps {
  containerClassName?: string
}

function HeroCard({ containerClassName }: HeroCardProps): ReactElement {
  return (
    <Card containerClassName={cls(containerClassName)} topBarClassName={cls()}>
      <div>
        <div>
          <img
            src={require("../../../assets/svgs/gdgAlgiersLogo.svg")}
            alt="gdgAlgiers"
            className="w-16"
          />
          <h2>GDG Algiers</h2>
        </div>
        <h1>Devfest</h1>

        <h3>November 10th, 2020</h3>
      </div>
    </Card>
  )
}

export default HeroCard
