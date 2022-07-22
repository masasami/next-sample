import React, { FC, Children, ReactNode } from 'react'

interface ListProps {
  children?: ReactNode
}

const List: FC<ListProps> = ({ children }) => {
  return (
    <ul>
      {Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
  )
}

export default function Component() {
  return (
    <List>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </List>
  )
}
