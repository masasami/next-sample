import { useState } from 'react'
import styles from './component0011.module.scss'

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <div>
      <button onClick={openModal}>モーダルを開く</button>

      {isOpen && (
        <div className={styles.modalGrayout}>
          <div className={styles.modalBody}>
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
