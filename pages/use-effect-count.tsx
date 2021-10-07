import { useEffect, useRef, useState } from 'react'

export default function Component() {
  const [count, setCount] = useState(0)
  const ref = useRef(true)

  useEffect(() => {
    if (ref.current) {
      ref.current = false
      return
    }
    alert('カウントが変更されました')
  }, [count])

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  )
}
