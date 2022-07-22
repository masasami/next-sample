import { ChangeEvent, useState } from 'react'

export default function Component() {
  const [message, setMessage] = useState('hello')
  // onChangeのイベントの型
  const changeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }
  return (
    <div>
      <input type="text" value={message} onChange={changeMessage} />
    </div>
  )
}
