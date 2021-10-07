import { useEffect, useState } from 'react'

type User = { id: number; name: string }

export default function Component() {
  const [users, setUsers] = useState<User[]>([]) // ユーザー全件の配列
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]) // 抽出されたユーザーの配列

  // 文字列をもとにユーザー全件から抽出
  const filterUsers = (keyword: string) => {
    setFilteredUsers(users.filter((user) => user.name.match(keyword)))
  }
  useEffect(() => {
    const users = [
      { id: 1, name: '山本太郎' },
      { id: 2, name: '田中次郎' },
      { id: 3, name: '佐藤三朗' },
    ]
    setUsers(users)
    setFilteredUsers(users)
  }, [])

  return (
    <div>
      <input type="text" placeholder="名前で検索" onChange={(e) => filterUsers(e.target.value)} />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
