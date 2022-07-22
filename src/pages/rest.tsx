import { useEffect } from 'react'

export default function Component() {
  const user = {
    id: 1,
    name: 'user1',
    job: 'engineer',
    password: 'password',
  }
  const { password, ...rest } = user

  useEffect(() => {}, [])

  return (
    <div>
      <h1>ユーザー情報</h1>
      <ul>
        {Object.keys(rest).map((key, i) => (
          <li key={i}>
            {key} : {user[key]}
          </li>
        ))}
      </ul>
    </div>
  )
}
