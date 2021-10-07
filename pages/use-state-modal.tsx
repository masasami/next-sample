import { useState } from 'react'

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <div>
      <button onClick={openModal}>モーダルを開く</button>

      {isOpen && (
        <div className="modalGrayout">
          <div className="modalBody">
            <header>モーダルのタイトル</header>
            <main>モーダルの内容</main>
            <footer>
              <button onClick={closeModal}>モーダルを閉じる</button>
            </footer>
          </div>
        </div>
      )}
    </div>
  )
}
