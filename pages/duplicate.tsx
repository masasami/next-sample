import { useEffect, useState } from 'react'

export default function Duplicate() {
  const users = [
    { id: 1, name: 'uesr1' },
    { id: 1, name: 'uesr1' },
    { id: 2, name: 'uesr2' },
    { id: 3, name: 'uesr3' },
    { id: 4, name: 'uesr4' },
    { id: 4, name: 'uesr4' },
  ]
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    const map = new Map(users.map((user) => [user.id, user]))
    const array = Array.from(map.values())
    setFilteredUsers(array)

    let values = []
    const filteredUsers = users.filter((user) => {
      if (values.indexOf(user.id) === -1) {
        values.push(user.id)
        return user
      }
    })
    console.log(filteredUsers)

    const getArrayDeleteDouble1 = (ary, key) => {
      let values = []
      return ary.filter((e) => {
        if (values.indexOf(e[key]) === -1) {
          values.push(e[key])
          return e
        }
      })
    }
  }, [])
  return (
    <div>
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>

      <ul>
        {filteredUsers.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
