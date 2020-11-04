import React, { ReactElement } from "react"
import Typeform from "../../components/common/Typeform"
import { Wrapper as TypeformWrapper } from "../../components/common/Typeform/common"
import Layout from "../../layout/Layout"

interface Props {}

function ProgrammingForKids(props: Props): ReactElement {
  return (
    <Layout
      seo={{
        title: "Programming for kids with Snai3i",
      }}
    >
      <TypeformWrapper className="bg-nightBlue">
        <Typeform
          title="programming for kids"
          src="https://form.typeform.com/to/opyPiT0V"
        />
      </TypeformWrapper>
    </Layout>
  )
}

export default ProgrammingForKids
