import { useState } from 'react'
import axios from 'axios'

export default function Component() {
  const [file, setFile] = useState(null)

  const upload = async () => {
    if (!file) return
    const formData = new FormData()
    formData.append('file', file)
    const { filename } = (
      await axios.post('http://localhost:8000/upload', formData)
    ).data
    console.log(filename)
    alert('ファイルをアップロードしました')
  }

  return (
    <div>
      <h1>ファイルアップロード</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={upload}>アップロード</button>
    </div>
  )
}
