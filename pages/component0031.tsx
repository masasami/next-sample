import { useEffect, useRef } from 'react'

export default function Component() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <input type="text" ref={inputRef} />
      <input type="text" />
      <input type="text" />
    </div>
  )
}
