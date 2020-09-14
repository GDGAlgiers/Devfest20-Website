import { Link, PageProps } from "gatsby"
import React, { ReactElement } from "react"

interface Props {}

function index({}: PageProps<Props>): ReactElement {
  return (
    <div>
      <h1>Hello in index page</h1>
      <p>
        <Link to="/example" className="line">
          Go to example page
        </Link>
      </p>
    </div>
  )
}

export default index
