import React, { ReactElement } from "react"
import Typeform from "../../components/common/Typeform"
import { Wrapper as TypeformWrapper } from "../../components/common/Typeform/common"
import Layout from "../../layout/Layout"

interface Props {}

function GenderEquity(props: Props): ReactElement {
  return (
    <Layout
      seo={{
        title: "Gender Equity in tech",
      }}
    >
      <TypeformWrapper className="bg-nightBlue">
        <Typeform
          title="gender equity"
          src="https://form.typeform.com/to/hqd5vRtd"
        />
      </TypeformWrapper>
    </Layout>
  )
}

export default GenderEquity
