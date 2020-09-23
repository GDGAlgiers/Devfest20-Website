import { useMediaQuery } from "react-responsive"

export const EXTRA_SMALL = "(min-width: 380px)"
export const SMALL = "(min-width: 640px)"
export const MEDIUM = "(min-width: 768px)"
export const LARGE = "(min-width: 1024px)"
export const EXTRA_LARGE = "(min-width: 1280px)"

export const useAtleastExtraSmall = () => useMediaQuery({ query: EXTRA_SMALL })
export const useAtleastSmall = () => useMediaQuery({ query: SMALL })
export const useAtleastMedium = () => useMediaQuery({ query: MEDIUM })
export const useAtleastLarge = () => useMediaQuery({ query: LARGE })
export const useAtleastExtraLarge = () => useMediaQuery({ query: EXTRA_LARGE })
