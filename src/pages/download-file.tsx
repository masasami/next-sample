export default function Component() {
  const users = [
    { id: 1, name: 'ユーザー１', filename: 'react.png' },
    { id: 2, name: 'ユーザー２', filename: null },
    { id: 3, name: 'ユーザー３', filename: null },
    { id: 4, name: 'ユーザー４', filename: 'python.png' },
    { id: 5, name: 'ユーザー５', filename: null },
  ]
  // ファイルダウンロード処理
  const download = async (filename: string) => {
    if (!filename) return
    const blob = await (await fetch(`http://localhost:8000/download/${filename}`)).blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.download = filename
    a.href = url
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>名前</th>
          <th>ファイル名</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={i}>
            <td>{user.name}</td>
            <td>{user.filename}</td>
            <td>
              {user.filename && (
                <button onClick={() => download(user.filename)}>
                  <img src="download.png" width={20} />
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
