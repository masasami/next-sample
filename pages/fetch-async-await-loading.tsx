import { useEffect, useState } from 'react'

export default function Component() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {}, [])

  const getUser = async () => {
    try {
      // ローディング開始
      setLoading(true)
      setUsers(await (await fetch('api/users')).json())
    } catch (e) {
      console.log(e)
    } finally {
      // ローディング終了
      setLoading(false)
    }
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={getUser}>ユーザー情報を取得</button>
      {loading && <div className="loading">loading...</div>}
      <style jsx>{`
        .loading {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          color: #ffffff;
          background-color: #00000050;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}
