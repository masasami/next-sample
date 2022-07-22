import { useState } from 'react'

export default function Component() {
  const [count, setCount] = useState(0)

  // useStateのset関数は即座には反映されない
  // +1しかされない
  const increment1 = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  // 直前にsetした値をもとに+1を行うので、正しく加算される
  // +3される
  // setCount((直前の値) => 直前の値 + 1)
  const increment2 = () => {
    setCount(count + 1)
    setCount((count) => count + 1) // 直前の値をもとに更新を行う
    setCount((count) => count + 1) // 直前の値をもとに更新を行う
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment1}>+3?</button>
      <button onClick={increment2}>+3</button>
    </div>
  )
}
