import { Link, PageProps } from "gatsby"
import React, { ReactElement } from "react"
import AgendaCard from "../components/AgendaComponent/AgendaCard"
import { H1 } from "../components/typography/typography"

interface Props {}

function index({}: PageProps<Props>): ReactElement {
  return (
    <div>
      <H1 className="text-blue">Hello in index page</H1>
      <p>
        <Link to="/example" className="no-underline hover:text-blue">
          Go to example page
        </Link>
      </p>
      <AgendaCard
        header="First Day"
        headerClassName="text-blue"
        topBarColor="bg-yellow"
        hoverTopBarColor="bg-green"
        cardOptions={{}}
        items={[
          {
            startHour: "10h00",
            endHour: "11h00",
            name: "Openning Ceremony",
          },
          {
            startHour: "10h00",
            endHour: "11h00",
            name: "Openning Ceremony",
          },
          {
            startHour: "10h00",
            endHour: "11h00",
            name: "Openning Ceremony",
          },
          {
            startHour: "10h00",
            endHour: "11h00",
            name: "Openning Ceremony",
          },
          {
            startHour: "10h00",
            endHour: "11h00",
            name: "Openning Ceremony",
          },
        ]}
      />
    </div>
  )
}

export default index
