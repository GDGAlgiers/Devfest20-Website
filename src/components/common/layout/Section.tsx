import styled from "styled-components"
import cls from "classnames"
export default styled.section.attrs((props) => ({
  ...props,
  className: cls("", props.className),
}))``
