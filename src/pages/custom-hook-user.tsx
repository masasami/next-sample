import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
}

const useUser = (id: number) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await (await fetch(`api/users/${id}`)).json()
      setUser(user)
    }
    fetchUser()
  }, [])

  return { user }
}

export default function Component() {
  const { user } = useUser(1)
  if (!user) return null

  return <div>{user.name}</div>
}
