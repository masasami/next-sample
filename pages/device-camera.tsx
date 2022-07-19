import { useEffect, useRef } from 'react'

const constraints: MediaStreamConstraints = {
  audio: false,
  video: {
    width: 300,
    height: 200,
    facingMode: 'user',
    // facingMode: { exact: 'environment' },
  },
}

export default function Component() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleClickShutter = () => {
    const ctx = canvasRef.current.getContext('2d')

    const audio = new Audio()
    audio.src = 'sound.mp3'
    audio.play()

    videoRef.current.pause()
    setTimeout(() => {
      videoRef.current.play()
    }, 500)

    ctx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)
  }

  useEffect(() => {
    ;(async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        videoRef.current.srcObject = stream
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play()
        }
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  return (
    <div>
      <video ref={videoRef} width={300} height={200}></video>
      <canvas ref={canvasRef} width={300} height={200}></canvas>
      <button onClick={handleClickShutter}>撮影する</button>
    </div>
  )
}
