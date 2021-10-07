import { useState } from 'react'

export default function Component() {
  const [users, setUsers] = useState([
    { id: 1, name: 'ユーザー１', age: 50, money: 4000 },
    { id: 2, name: 'ユーザー２', age: 15, money: 6000 },
    { id: 3, name: 'ユーザー３', age: 32, money: 1000 },
  ])
  // 昇順ソート（ソートしたいプロパティを引数で受け取る）
  const sortAsc = (property: string) => {
    const sortedUsers = users.sort((user1, user2) => {
      if (user1[property] > user2[property]) return 1
      if (user1[property] < user2[property]) return -1
      return 0
    })
    setUsers([...sortedUsers])
  }
  // 降順ソート（ソートしたいプロパティを引数で受け取る）
  const sortDesc = (property: string) => {
    const sortedUsers = users.sort((user1, user2) => {
      if (user1[property] < user2[property]) return 1
      if (user1[property] > user2[property]) return -1
      return 0
    })
    setUsers([...sortedUsers])
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>
            名前
            <button onClick={() => sortAsc('name')}>↑</button>
            <button onClick={() => sortDesc('name')}>↓</button>
          </th>
          <th>
            年齢
            <button onClick={() => sortAsc('age')}>↑</button>
            <button onClick={() => sortDesc('age')}>↓</button>
          </th>
          <th>
            所持金
            <button onClick={() => sortAsc('money')}>↑</button>
            <button onClick={() => sortDesc('money')}>↓</button>
          </th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, i) => (
          <tr key={i}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td style={{ textAlign: 'right' }}>{user.age}</td>
            <td style={{ textAlign: 'right' }}>{user.money.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
