import { useEffect, useState } from 'react'

// サムネイル描画用コンポーネント
const Thumbnail = (props: { filename: string }) => {
  const [objectUrl, setObjectUrl] = useState(null)
  useEffect(() => {
    if (!props.filename) return
    ;(async () => {
      const blob = await (await fetch(`http://localhost:8000/download/${props.filename}`)).blob()
      setObjectUrl(URL.createObjectURL(blob))
    })()
  }, [])

  return <img src={objectUrl || 'human.png'} width={60} height={60} />
}

export default function Component() {
  const users = [
    { id: 1, name: 'ユーザー１', filename: 'react.png' },
    { id: 2, name: 'ユーザー２', filename: null },
    { id: 3, name: 'ユーザー３', filename: null },
    { id: 4, name: 'ユーザー４', filename: 'python.png' },
    { id: 5, name: 'ユーザー５', filename: null },
  ]

  return (
    <table className="table">
      <thead>
        <tr>
          <th>アイコン</th>
          <th>名前</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={i}>
            <td>
              <Thumbnail filename={user.filename} />
            </td>
            <td>{user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
