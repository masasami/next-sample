import { useMemo, useState } from 'react'

export default function Component() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const func = (count: number) => {
    for (let i = 0; i < 999999999; i++) {}
    return count
  }
  const memoFunc = useMemo(() => func(count2), [count2])
  return (
    <div>
      <p>{count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>count1 + 1</button>

      <p>{memoFunc}</p>
      <button onClick={() => setCount2(count2 + 1)}>count2 + 1</button>
    </div>
  )
}
