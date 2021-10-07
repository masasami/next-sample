import { useState } from 'react'

export default function Component() {
  const [count, setCount] = useState(0)

  const onClick = () => {
    console.log('更新前', count)
    setCount(100)
    console.log('更新後', count)
  }

  return (
    <div>
      <button onClick={onClick}>+100</button>
    </div>
  )
}
