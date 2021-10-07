import { useState } from 'react'

export default function Component() {
  const [user, setUser] = useState({ id: 1, name: null })
  return (
    <div>
      <input
        type="text"
        value={user.name || ''} // nullを空文字に変換
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
    </div>
  )
}
