import { useCallback, useState } from 'react'

const useCount = (initialState: number): [number, () => void, () => void] => {
  const [count, setCount] = useState(initialState)
  const increment = useCallback(() => setCount((count) => count + 1), [])
  const decrement = useCallback(() => setCount((count) => count - 1), [])
  return [count, increment, decrement]
}

export default function Component() {
  const [count1, increment1, decrement1] = useCount(0)
  const [count2, increment2, decrement2] = useCount(0)
  const [count3, increment3, decrement3] = useCount(0)

  return (
    <div>
      <h2>カウント1</h2>
      <p>{count1}</p>
      <button onClick={increment1}>+1</button>
      <button onClick={decrement1}>-1</button>

      <h2>カウント2</h2>
      <p>{count2}</p>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>

      <h2>カウント3</h2>
      <p>{count3}</p>
      <button onClick={increment3}>+1</button>
      <button onClick={decrement3}>-1</button>
    </div>
  )
}
