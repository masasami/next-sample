import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
}

export default function Component() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('api/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((e) => console.log(e))
  }, [])

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
