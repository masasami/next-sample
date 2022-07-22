import { useState } from 'react'

export default function Component() {
  const [flag, setFlag] = useState(false)

  return (
    <div>
      <h1 style={{ color: flag ? 'red' : 'black' }}>フラグに応じて色が変わります</h1>
      <button onClick={() => setFlag(!flag)}>フラグ切り替え</button>
    </div>
  )
}
