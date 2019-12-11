import { useState, useEffect } from 'react'

//=========================================================
export function useMedia(breakPoint: number) {
  const [state, setState] = useState(false)

  useEffect(() => {
    const handler = () => setState(window.innerWidth < breakPoint)

    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [breakPoint])

  return state
}
