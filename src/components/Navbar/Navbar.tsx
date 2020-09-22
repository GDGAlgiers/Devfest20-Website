import React, { ReactElement } from "react"
import { useMediaQuery } from "react-responsive"
import { useAtleastSmall, useAtleastMedium } from "../../utils/medias"
interface Props {}

function Navbar({}: Props): ReactElement {
  const isAtleastSm = useAtleastSmall()
  const isAtleastMd = useAtleastMedium()
  const renderBasedOnMedia = () => {
    if (isAtleastMd) return "MD"
    if (isAtleastSm) return "SM"
    return "XS"
  }
  return <div>{renderBasedOnMedia()}</div>
}

export default Navbar
