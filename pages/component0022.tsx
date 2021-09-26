import { useState } from 'react'

export default function Component() {
  const [users, setUsers] = useState([
    { id: 1, name: 'ユーザー１', money: 1000 },
    { id: 2, name: 'ユーザー２', money: 2000 },
    { id: 3, name: 'ユーザー３', money: 3000 },
  ])
  return (
    <div>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            {user.name}の所持金：{user.money.toLocaleString()}円
          </li>
        ))}
      </ul>
      合計金額：
      {users
        .reduce((prevMoney, user) => {
          return prevMoney + user.money
        }, 0)
        .toLocaleString()}
      円
    </div>
  )
}
