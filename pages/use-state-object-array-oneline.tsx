import { useState } from 'react'

export default function Component() {
  const [users, setUsers] = useState([
    { id: 1, name: 'ユーザー１', age: '10', checked: false },
    { id: 2, name: 'ユーザー２', age: '20', checked: false },
    { id: 3, name: 'ユーザー３', age: '30', checked: false },
  ])

  return (
    <ul>
      {users.map((user, i) => (
        <li key={i}>
          <input
            type="checkbox"
            checked={user.checked}
            onChange={(e) => setUsers((users) => users.map((u) => ({ ...u, checked: u.id === user.id ? e.target.checked : u.checked })))}
          />
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUsers((users) => users.map((u) => ({ ...u, name: u.id === user.id ? e.target.value : u.name })))}
          />
          <input
            type="text"
            value={user.age}
            onChange={(e) => setUsers((users) => users.map((u) => ({ ...u, age: u.id === user.id ? e.target.value : u.age })))}
          />
        </li>
      ))}
    </ul>
  )
}
