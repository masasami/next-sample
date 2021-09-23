import { useState } from 'react'

export default function Component() {
  const [users, setUsers] = useState([
    { id: 1, name: 'ユーザー１' },
    { id: 2, name: 'ユーザー２' },
    { id: 3, name: 'ユーザー３' },
  ])
  const deleteUser = async (id: number) => {
    await fetch(`api/users/${id}`, { method: 'DELETE' })
    const filteredUsers = users.filter((user) => user.id !== id)
    setUsers(filteredUsers)
  }
  return (
    <div>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            {user.name}
            <button onClick={() => deleteUser(user.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
