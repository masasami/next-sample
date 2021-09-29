import { useEffect, useRef } from 'react'

export default function Component() {
  const containerRef = useRef(null)

  useEffect(() => {
    const el1 = containerRef.current
    const el2 = document.getElementById('container')
    console.log('el1', el1)
    console.log('el2', el2)
  }, [])
  return (
    <div>
      <div id="container" ref={containerRef}>
        このタグを参照します
      </div>
    </div>
  )
}
