
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Set initial value
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Create the media query list
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Define the callback function
    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches)
    }
    
    // Modern browsers
    if (mql.addEventListener) {
      mql.addEventListener("change", handleResize)
    } 
    // Older browsers
    else if (mql.addListener) {
      // @ts-ignore - for older browsers
      mql.addListener(handleResize)
    }
    
    // Call the handler right away for initial state
    handleResize(mql)
    
    // Clean up
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handleResize)
      } else if (mql.removeListener) {
        // @ts-ignore - for older browsers
        mql.removeListener(handleResize)
      }
    }
  }, [])

  return isMobile === undefined ? false : isMobile
}
