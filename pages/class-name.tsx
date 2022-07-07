import styles from 'styles/style.module.scss'

export default function Component() {
  return (
    <>
      {/* css module */}
      <div className={`${styles.a} ${styles.b} ${styles.c}`}></div>
      <div className={styles.a + ' ' + styles.b + ' ' + styles.c}></div>

      {/* 普通のクラス */}
      <div className="global-a global-b global-c"></div>

      {/* css module＆普通のクラス */}
      <div className={`${styles.a} global-a`}></div>
      <div className={styles.a + ' global-a'}></div>
    </>
  )
}
