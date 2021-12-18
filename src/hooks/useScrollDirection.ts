import { useCallback, useEffect, useState } from 'react'

const useScrollDirection = (): string => {
  const [y, setY] = useState('')

  const handleNavigation = useCallback((e) => {
    const window = e.currentTarget
    if (window.scrollY === 0) {
      setY('up')
    } else {
      setY('down')
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  return y
}

export default useScrollDirection
