import { useState } from 'react'

export default function Component() {
  // 文字列
  const [message, setMessage] = useState('hello')

  return (
    <div>
      <h1>{message}</h1>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
    </div>
  )
}
