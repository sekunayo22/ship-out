import { useLayoutEffect } from "react"

export const useTableAutoPageSize = (
    wrapperRef: React.RefObject<HTMLDivElement | null>,
    setPageSize: React.Dispatch<React.SetStateAction<number>>
  ) => {
    useLayoutEffect(() => {
      const wrapper = wrapperRef.current
      if (!wrapper) return
  
      const calculatePageSize = () => {
        const container = wrapper.querySelector('[data-table-container]') as HTMLElement | null
        const headerRow = wrapper.querySelector('[data-table-header-row]') as HTMLElement | null
        const footerRow = wrapper.querySelector('[data-table-footer-row]') as HTMLElement | null
        const row = wrapper.querySelector('[data-table-row]') as HTMLElement | null
  
        if (!container || !row) return
  
        const containerHeight = container.clientHeight
        const headerHeight = headerRow?.offsetHeight ?? 0
        const footerHeight = footerRow?.offsetHeight ?? 0
        const rowHeight = row.offsetHeight || 40
        const availableHeight = containerHeight - headerHeight - footerHeight
  
        if (availableHeight <= 0 || rowHeight <= 0) return
  
        const nextPageSize = Math.max(1, Math.floor(availableHeight / rowHeight))
        setPageSize(prev => (prev === nextPageSize ? prev : nextPageSize))
      }
  
      const observer = new ResizeObserver(calculatePageSize)
      observer.observe(wrapper)
      const container = wrapper.querySelector('[data-table-container]') as HTMLElement | null
      if (container) observer.observe(container)
  
      window.addEventListener('resize', calculatePageSize)
      calculatePageSize()
  
      return () => {
        observer.disconnect()
        window.removeEventListener('resize', calculatePageSize)
      }
    }, [wrapperRef, setPageSize])
  }

  export default useTableAutoPageSize