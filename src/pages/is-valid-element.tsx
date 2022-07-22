import React, { FC } from 'react'

const IsValidElement: FC = () => {
  const handleClick = (element: any) => {
    if (React.isValidElement(element)) {
      alert('OK')
    } else {
      alert('NG')
    }
  }
  return (
    <div>
      <button onClick={() => handleClick(<div></div>)}>check</button>
      <button onClick={() => handleClick('<div></div>')}>check</button>
      <button onClick={() => handleClick(1)}>check</button>
      <button onClick={() => handleClick(true)}>check</button>
    </div>
  )
}

export default IsValidElement
