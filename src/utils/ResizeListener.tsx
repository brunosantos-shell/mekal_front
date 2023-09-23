import { useEffect, useState } from 'react'

export default function useWindowResize() {
  const isClient = typeof window === 'object'

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  })

  useEffect(() => {
    if (!isClient) {
      return
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isClient])

  return windowSize
}
