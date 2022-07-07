import { DetailedHTMLProps, AnchorHTMLAttributes, FC } from 'react'

interface Props {
  title: string
}
const AnchorComponent: FC<Props & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> = ({
  title,
  ...anchorAttributes
}) => {
  return <a {...anchorAttributes}>{title}</a>
}

export default AnchorComponent
