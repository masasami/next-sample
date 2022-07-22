import { useEffect, useState } from 'react'
import axios from 'axios'

interface User {
  id: number
  name: string
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL
const apiService = {
  getUsers: async () => (await axios.get<User[]>(`${apiUrl}/users`)).data,
  getUser: async (id: number) => (await axios.get<User>(`${apiUrl}/users/${id}`)).data,
}

export default function Component() {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    ;(async () => {
      try {
        setUsers(await apiService.getUsers())
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])
  return (
    <div>
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
