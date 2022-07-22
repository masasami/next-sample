import { useState, useEffect } from 'react'
import Router from 'next/router'

export default function Component() {
  // コンポーネントを描画するとき
  useEffect(() => {
    navigator.sendBeacon(
      'http://localhost:8000/users',
      JSON.stringify({
        message: 'コンポーネント描画',
      })
    )
  }, [])

  // コンポーネントを破棄するとき
  useEffect(() => {
    return () => {
      navigator.sendBeacon(
        'http://localhost:8000/users',
        JSON.stringify({
          message: 'コンポーネント破棄',
        })
      )
    }
  }, [])

  // ウィンドウを閉じるとき
  useEffect(() => {
    window.onbeforeunload = () => {
      navigator.sendBeacon(
        'http://localhost:8000/users',
        JSON.stringify({
          message: 'ウィンドウを閉じる',
        })
      )
    }
  }, [])

  // TODO index.tsx作る必要あり
  return (
    <div>
      <button onClick={() => Router.push('/')}>遷移</button>
    </div>
  )
}
