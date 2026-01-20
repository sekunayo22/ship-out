import { useEffect, type RefObject } from "react"

export const useClickOutside = (
    ref: RefObject<HTMLElement | null>,
    handler: () => void
  ) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Element
        if (ref.current && !ref.current.contains(target)) {
          handler()
        }
      }
  
      document.addEventListener('mousedown', handleClickOutside)
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref, handler])
  }
  