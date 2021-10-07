import { useState } from 'react'

export default function Component() {
  const [users, setUsers] = useState([
    { id: 1, name: 'ユーザー１', age: 20 },
    { id: 2, name: 'ユーザー２', age: 30 },
    { id: 3, name: 'ユーザー３', age: 40 },
  ])

  return (
    <div>
      {/* keyを持たせられないから描画したときにエラーが出る */}
      {users.map((user) => (
        <>
          <div>{user.id}</div>
          <div>{user.name}</div>
          <div>{user.age}</div>
        </>
      ))}
    </div>
  )
}
