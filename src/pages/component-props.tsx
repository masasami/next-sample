import { ComponentProps, FC } from 'react'

interface Props {
  title: string
}

const Button: FC<Props & ComponentProps<'button'>> = ({ title, ...buttonAttributes }) => {
  return <button {...buttonAttributes}>{title}</button>
}

export default function Component() {
  const handleClick = () => {}

  return (
    <div>
      <Button title="リンク1" onClick={handleClick} />
      <Button title="リンク2" onClick={handleClick} />
    </div>
  )
}
