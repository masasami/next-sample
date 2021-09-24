import { useState } from 'react'

export default function Component() {
  const [users, setUsers] = useState([
    { id: 2, name: 'ユーザー２' },
    { id: 1, name: 'ユーザー１' },
    { id: 3, name: 'ユーザー３' },
  ])
  // 昇順ソート
  const sortAsc = () => {
    const sortedUsers = users.sort((user1, user2) => {
      if (user1.id > user2.id) return 1
      if (user1.id < user2.id) return -1
      return 0
    })
    setUsers([...sortedUsers])
  }
  // 降順ソート
  const sortDesc = () => {
    const sortedUsers = users.sort((user1, user2) => {
      if (user1.id < user2.id) return 1
      if (user1.id > user2.id) return -1
      return 0
    })
    setUsers([...sortedUsers])
  }
  return (
    <div>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            {user.id}:{user.name}
          </li>
        ))}
      </ul>
      <button onClick={sortAsc}>昇順ソート</button>
      <button onClick={sortDesc}>降順ソート</button>
    </div>
  )
}
