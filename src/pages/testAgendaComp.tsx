import { Link, PageProps } from "gatsby"
import React, { ReactElement } from "react"
import Card from "../components/common/Card/Card"
import { H1 } from "../components/typography/typography"

interface Props {}

function index({}: PageProps<Props>): ReactElement {
  return (
    <div className="h-full w-full min-h-screen">
      <Card topBarClassName="bg-blue">
        <div className="h-full"></div>
      </Card>
    </div>
  )
}

export default index
