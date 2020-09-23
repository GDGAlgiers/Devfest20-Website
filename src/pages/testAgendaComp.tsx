import { Link, PageProps } from "gatsby"
import React, { ReactElement } from "react"
import AgendaCard from "../components/AgendaComponent/AgendaCard"
import { H1 } from "../components/typography/typography"

interface Props {}

function index({}: PageProps<Props>): ReactElement {
  return (
    <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center self-start m-auto">
      <AgendaCard
        containerClassName="flex-1"
        header="< / Day One >"
        cardOptions={{
          topBarClassName: "bg-yellow",
          contentAreaClassName: "text-nightBlue",
        }}
      />
      <AgendaCard
        containerClassName="flex-1"
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
