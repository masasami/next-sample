import { useEffect, useState } from 'react'

const Thumbnail = (props: { filename: string }) => {
  const [objectUrl, setObjectUrl] = useState(null)
  useEffect(() => {
    if (!props.filename) return
    ;(async () => {
      const buffer = await (await fetch(`http://localhost:8000/download/${props.filename}`)).arrayBuffer()
      if (buffer) {
        const blob = new Blob([buffer], { type: 'image/png' })
        setObjectUrl(URL.createObjectURL(blob))
      }
    })()
  }, [])

  return <img src={objectUrl} width={40} height={40} />
}

export default function Component() {
  const filenames = ['react.png', 'python.png', 'human.png']

  return (
    <div>
      {filenames.map((filename, i) => (
        <Thumbnail key={i} filename={filename} />
      ))}
    </div>
  )
}
