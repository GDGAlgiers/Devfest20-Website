import styled from "styled-components"
import cls from "classnames"
export const H1 = styled.h1.attrs((props) => ({
  ...props,
  className: cls("c-h1", props.className),
}))``
export const H2 = styled.h2.attrs((props) => ({
  ...props,
  className: cls("c-h2", props.className),
}))``
export const H3 = styled.h3.attrs((props) => ({
  ...props,
  className: cls("c-h3", props.className),
}))``
export const H4 = styled.h4.attrs((props) => ({
  ...props,
  className: cls("c-h4", props.className),
}))``
export const H5 = styled.h5.attrs((props) => ({
  ...props,
  className: cls("c-h5", props.className),
}))``
export const H6 = styled.h6.attrs((props) => ({
  ...props,
  className: cls("c-h6", props.className),
}))``
