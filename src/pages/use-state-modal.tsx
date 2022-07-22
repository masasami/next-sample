import { useState } from 'react'
import { css } from '@emotion/css'

const backgroundStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000050;
`
const dialogStyle = css`
  width: 500px;
  background-color: #ffffff;
`
const headerStyle = css`
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #61dafb;
`
const mainStyle = css`
  padding: 30px;
`
const footerStyle = css`
  text-align: center;
  padding-bottom: 30px;
`

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <div>
      <button onClick={openModal}>モーダルを開く</button>

      {isOpen && (
        <div className={backgroundStyle}>
          <div className={dialogStyle}>
            <header className={headerStyle}>モーダルのタイトル</header>
            <main className={mainStyle}>モーダルの内容</main>
            <footer className={footerStyle}>
              <button onClick={closeModal}>モーダルを閉じる</button>
            </footer>
          </div>
        </div>
      )}
    </div>
  )
}
