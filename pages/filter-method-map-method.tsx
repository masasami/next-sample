import { useState } from 'react'
import axios from 'axios'

export default function Component() {
  const [users, setUsers] = useState([
    { id: 1, name: 'ユーザー１', checked: false },
    { id: 2, name: 'ユーザー２', checked: false },
    { id: 3, name: 'ユーザー３', checked: false },
  ])

  const deleteUsers = async () => {
    // filterメソッド、mapメソッドを使用してチェックされたユーザーのIDを抽出
    const ids = users.filter((user) => user.checked).map((user) => user.id)
    await axios.post('api/users/delete', { ids })
  }

  return (
    <div>
      <button onClick={deleteUsers}>選択したユーザーを削除</button>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={user.checked}
              onChange={(e) =>
                setUsers((prevUsers) => {
                  prevUsers[i].checked = e.target.checked
                  return [...prevUsers]
                })
              }
            />
            {user.id}:{user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
