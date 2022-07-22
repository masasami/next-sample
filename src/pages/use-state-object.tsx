import { useState } from 'react'

export default function Component() {
  // オブジェクト
  const [user, setUser] = useState({ id: 1, name: 'ユーザー１' })

  return (
    <div>
      <h1>{user.name}</h1>
      <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
    </div>
  )
}
