import React, { ReactElement } from "react"

interface TypeFormProps {
  title: string
  src: string
}

function Typeform(props: TypeFormProps): ReactElement {
  return (
    <>
      <iframe
        title={props.title}
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src={props.src}
      ></iframe>
      <script
        defer
        type="text/javascript"
        src="https://embed.typeform.com/embed.js"
      ></script>
    </>
  )
}

export default Typeform
