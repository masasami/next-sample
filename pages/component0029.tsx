
export default function Component() {
  const users = [
    { id: 1, name: 'ユーザー１', age: 22 },
    { id: 2, name: 'ユーザー２', age: 30 },
    { id: 3, name: 'ユーザー３', age: 41 },
  ]
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}の年齢：{user.age}歳
          </li>
        ))}
      </ul>
      平均年齢：
      {users.reduce((prevTotal, user) => prevTotal + user.age, 0) / users.length}
    </div>
  )
}
