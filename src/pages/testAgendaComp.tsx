import { Link, PageProps } from "gatsby"
import React, { ReactElement } from "react"
import AgendaCard from "../components/AgendaComponent/AgendaCard"

interface Props {}

function index({}: PageProps<Props>): ReactElement {
  return (
    <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col justify-center self-start m-auto sm:flex-row">
      <AgendaCard
        containerClassName="flex-1"
        header="< DayOne >"
        topBarColor="bg-yellow"
        hoverToBarColor="bg-green"
        cardOptions={{
          contentAreaClassName: "text-nightBlue",
        }}
      />
      <AgendaCard
        containerClassName="flex-1"
        header="< / DayTwo >"
        topBarColor="bg-yellow"
        hoverToBarColor="bg-green"
        cardOptions={{
          contentAreaClassName: "text-nightBlue",
        }}
      />
    </div>
  )
}

export default index
