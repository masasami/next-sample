import React, { FC, MouseEventHandler } from 'react'

interface ButtonProps {
  name: string
  onClick: MouseEventHandler<HTMLButtonElement>
}
const Button: FC<ButtonProps> = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>
}

const CloneElement: FC = () => {
  const handleClick = (message: string) => alert(message)
  const buttonElement = <Button name="ボタン" onClick={() => handleClick('ボタンです！')} />
  return (
    <div>
      {buttonElement}
      {React.cloneElement(buttonElement, {
        name: '名前だけ変更',
      })}
      {React.cloneElement(buttonElement, {
        onClick: () => handleClick('関数だけ変更！'),
      })}
      {React.cloneElement(buttonElement, {
        name: '名前と関数変更',
        onClick: () => handleClick('名前と関数の両方変更しました！'),
      })}
    </div>
  )
}

export default CloneElement
