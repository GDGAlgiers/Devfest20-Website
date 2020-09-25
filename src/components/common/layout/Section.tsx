import styled from "styled-components"
import cls from "classnames"
import { dotBackground } from "../css"
export default styled.section.attrs((props) => ({
  ...props,
  className: cls("", props.className),
}))``

export const WithDotsBackgroundContainer = styled.div.attrs((props) => ({
  className: "w-full",
}))`
  ${dotBackground}
`
