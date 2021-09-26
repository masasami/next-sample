export default function Component() {
  const users = [
    { id: 1, name: 'ユーザー１', age: 10, money: 1000 },
    { id: 2, name: 'ユーザー２', age: 15, money: 2000 },
    { id: 3, name: 'ユーザー３', age: 20, money: 3000 },
  ]

  return (
    <div>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            {user.name}の年齢：{user.age}歳
          </li>
        ))}
      </ul>
      未成年者は{users.filter((user) => user.age < 20).length}人
    </div>
  )
}
