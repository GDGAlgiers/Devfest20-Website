import { useEffect, useLayoutEffect, useState } from "react"

export const isInViewport = function (element: Element) {
  var bounding = element.getBoundingClientRect()
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  )
}
export const outSideViewportCompletely = function (element: Element) {
  const bounding = element.getBoundingClientRect()
  return (
    bounding.bottom <= 0 ||
    bounding.top >=
      (window.innerHeight || document.documentElement.clientHeight) ||
    bounding.right <= 0 ||
    bounding.left >= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export const useRefElementInViewport = (ref: React.RefObject<Element>) => {
  const [inViewport, setInViewport] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (ref.current) setInViewport(!outSideViewportCompletely(ref.current))
    })
  }, [setInViewport, ref])

  return inViewport
}

export const useElementInViewPort = (element: HTMLElement | null) => {
  const [inViewport, setInViewport] = useState(() => {
    if (element) return !outSideViewportCompletely(element)
    else return false
  })
  useLayoutEffect(() => {
    if (element) {
      setInViewport(!outSideViewportCompletely(element))
      ///nullish comparaison for SSR
      window?.addEventListener("scroll", (event) => {
        if (element) setInViewport(!outSideViewportCompletely(element))
      })
    }
  }, [element])

  return inViewport
}
