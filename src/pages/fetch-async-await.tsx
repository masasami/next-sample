import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
}

export default function Component() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('api/users')
        const users = await response.json()
        setUsers(users)
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
