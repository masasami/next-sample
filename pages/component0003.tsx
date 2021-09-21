import { useState } from 'react'

export default function Component() {
  // オブジェクトの配列
  const [users, setUsers] = useState([
    { id: 1, name: 'ユーザー１' },
    { id: 2, name: 'ユーザー２' },
    { id: 3, name: 'ユーザー３' },
  ])

  return (
    <div>
      {users.map((user, i) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <input
            type="text"
            value={user.name}
            onChange={(e) =>
              setUsers((prevUsers) => {
                prevUsers[i].name = e.target.value
                return [...prevUsers]
              })
            }
          />
        </div>
      ))}
    </div>
  )
}
