import { Link, PageProps } from "gatsby"
import React, { ReactElement } from "react"
import AgendaCard from "../components/AgendaComponent/AgendaCard"
import { H1 } from "../components/typography/typography"

interface Props {}

function index({}: PageProps<Props>): ReactElement {
  return (
    <div className="w-full">
      <AgendaCard
        header="< / Day One >"
        cardOptions={{
          topBarClassName: "bg-yellow",
          contentAreaClassName: "text-nightBlue",
        }}
      />
      <AgendaCard
        header="< / Day One >"
        cardOptions={{
          topBarClassName: "bg-yellow",
          contentAreaClassName: "text-nightBlue",
        }}
      />
    </div>
  )
}

export default index
