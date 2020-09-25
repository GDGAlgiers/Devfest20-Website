import { css } from "styled-components"
import { LARGE } from "../../utils/medias"
/// Style elements
export const customShadow = css`
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.4);
`
export const dotBackground = css`
  background-image: url(${require("../../assets/svgs/bgDots.svg")});
  background-repeat: repeat;
  background-size: 100vw;
  @media ${LARGE} {
    background-repeat: no-repeat;
    background-size: 100vw;
    background-position-y: -5%;
    background-position-x: 50%;
  }
`
