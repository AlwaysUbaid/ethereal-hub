
import * as React from "react"

// Define additional breakpoints for more responsive design
const MOBILE_BREAKPOINT = 768
const SMALL_MOBILE_BREAKPOINT = 480

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
  const [isSmallMobile, setIsSmallMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Set initial values
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    setIsSmallMobile(window.innerWidth < SMALL_MOBILE_BREAKPOINT)
    
    // Create the media query lists
    const mobileMql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const smallMobileMql = window.matchMedia(`(max-width: ${SMALL_MOBILE_BREAKPOINT - 1}px)`)
    
    // Define the callback functions
    const handleMobileResize = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches)
    }
    
    const handleSmallMobileResize = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsSmallMobile(e.matches)
    }
    
    // Modern browsers
    if (mobileMql.addEventListener) {
      mobileMql.addEventListener("change", handleMobileResize)
      smallMobileMql.addEventListener("change", handleSmallMobileResize)
    } 
    // Older browsers
    else if (mobileMql.addListener) {
      // @ts-ignore - for older browsers
      mobileMql.addListener(handleMobileResize)
      // @ts-ignore - for older browsers
      smallMobileMql.addListener(handleSmallMobileResize)
    }
    
    // Call the handlers right away for initial state
    handleMobileResize(mobileMql)
    handleSmallMobileResize(smallMobileMql)
    
    // Clean up
    return () => {
      if (mobileMql.removeEventListener) {
        mobileMql.removeEventListener("change", handleMobileResize)
        smallMobileMql.removeEventListener("change", handleSmallMobileResize)
      } else if (mobileMql.removeListener) {
        // @ts-ignore - for older browsers
        mobileMql.removeListener(handleMobileResize)
        // @ts-ignore - for older browsers
        smallMobileMql.removeListener(handleSmallMobileResize)
      }
    }
  }, [])

  return {
    isMobile: isMobile === undefined ? false : isMobile,
    isSmallMobile: isSmallMobile === undefined ? false : isSmallMobile
  }
}
