import { useState, Fragment } from 'react'

export default function Component() {
  const [users, setUsers] = useState([
    { id: 1, name: 'ユーザー１', age: 20 },
    { id: 2, name: 'ユーザー２', age: 30 },
    { id: 3, name: 'ユーザー３', age: 40 },
  ])

  return (
    <div>
      {/* Fragmentを使用することで、keyを持たせられるようになる */}
      {users.map((user) => (
        <Fragment key={user.id}>
          <div>{user.id}</div>
          <div>{user.name}</div>
          <div>{user.age}</div>
        </Fragment>
      ))}
    </div>
  )
}
