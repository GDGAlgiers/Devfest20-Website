import React, { ReactElement } from "react"
import styled from "styled-components"
import Typeform from "../../components/common/Typeform"
import Layout from "../../layout/Layout"
interface Props {}

function Challenges({}: Props): ReactElement {
  return (
    <Layout
      seo={{
        title: "Challenges registration",
      }}
    >
      <Wrapper className="bg-nightBlue">
        <Typeform
          title="register-challenges"
          src="https://form.typeform.com/to/OfgRXh1h"
        />
      </Wrapper>
    </Layout>
  )
}

export default Challenges

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`
