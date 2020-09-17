import { Link, PageProps } from "gatsby"
import React, { ReactElement } from "react"
import { H1 } from "../components/typography/typography"

interface Props {}

function index({}: PageProps<Props>): ReactElement {
  return (
    <div>
      <H1>Hello in index page</H1>
      <p>
        <Link to="/example" className="line">
          Go to example page
        </Link>
      </p>
    </div>
  )
}

export default index
