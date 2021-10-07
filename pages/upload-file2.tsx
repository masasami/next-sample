import { useState } from 'react'

export default function Component() {
  const [file, setFile] = useState<File>(null)

  const uploadFile = async () => {
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData,
      })
      const json = await response.json()
      console.log(json)
      alert('ファイルをアップロードしました')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>アップロード</button>
    </div>
  )
}
