export default function Component() {
  const users = [
    { id: 1, name: 'ユーザー１', age: 22 },
    { id: 2, name: 'ユーザー２', age: 30 },
    { id: 3, name: 'ユーザー３', age: 41 },
  ]
  // mapメソッドでタグを描画するとひとえに言っても色々な書き方があります
  return (
    <div>
      {/* 行数削減重視 */}
      <ul>{/* {users.map((user) => <li key={user.id}>{user.name}</li>)} */}</ul>

      {/* 可読性重視 */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* 汎用性重視 */}
      <ul>
        {users.map((user) => {
          console.log(`${user.name}のliタグを描画します`)
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </div>
  )
}
