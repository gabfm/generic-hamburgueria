import { useEffect } from 'react'
import { useRef } from 'react'

export const useKeydown = (keyId, callback) => {
  const ref = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === keyId) {
        if (callback) callback(ref.current)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return ref
}