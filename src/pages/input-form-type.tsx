import { useEffect, useState } from 'react'

export default function Component() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(typeof count)
  }, [count])
  return (
    <div>
      <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
    </div>
  )
}
