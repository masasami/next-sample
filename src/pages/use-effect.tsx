import { useEffect, useState } from 'react'

export default function Component() {
  const [count, setCount] = useState(0)
  // 空の配列は初回描画時に動きます
  useEffect(() => {
    console.log('コンポーネントが描画されました')
  }, [])

  // 配列に変数をセットすると、セットした変数に変化があったときに動きます
  useEffect(() => {
    console.log('countが更新されました')
  }, [count])

  // returnすると別ページに遷移する等でコンポーネントが破棄されるときに動きます
  useEffect(() => {
    return () => console.log('コンポーネントが破棄されました')
  }, [])

  return <div></div>
}
