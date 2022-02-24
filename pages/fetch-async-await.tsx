import { useEffect, useState } from 'react'

type User = { id: number; name: string }

export default function Component() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const json = await (await fetch('api/users')).json()
        setUsers(json)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
