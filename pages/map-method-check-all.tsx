import { useState } from 'react'

export default function Component() {
  const [users, setUsers] = useState([
    { id: 1, name: 'ユーザー１', checked: false },
    { id: 2, name: 'ユーザー２', checked: false },
    { id: 3, name: 'ユーザー３', checked: false },
    { id: 4, name: 'ユーザー４', checked: false },
    { id: 5, name: 'ユーザー５', checked: false },
    { id: 6, name: 'ユーザー６', checked: false },
    { id: 7, name: 'ユーザー７', checked: false },
    { id: 8, name: 'ユーザー８', checked: false },
  ])

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            {/* 全件チェック用のチェックボックス */}
            <input
              type="checkbox"
              onChange={(e) => setUsers(users.map((user) => ({ ...user, checked: e.target.checked })))}
            />
          </th>
          <th>名前</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={i}>
            <td>
              <input
                type="checkbox"
                checked={user.checked}
                onChange={() => {
                  // ...
                }}
              />
            </td>
            <td>{user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
