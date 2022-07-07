import { FC, Dispatch, SetStateAction, DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'

// inputのデザインは使い回したい。でも属性は適宜変えられるようにしたい＆型チェックもしたい！

interface Props {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}
const Input: FC<Props & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({
  value,
  setValue,
  ...attributes
}) => {
  return (
    <>
      <input className="input" value={value} onChange={(e) => setValue(e.target.value)} {...attributes} />

      <style jsx>{`
        .input {
          color: blue;
          padding: 8px;
          font-size: 24px;
          font-weight: bold;
          border-radius: 4px;
          border: 1px solid #cccccc;
        }
      `}</style>
    </>
  )
}

export default function Component() {
  const [name, setName] = useState('jack')
  const [password, setPassword] = useState('password')
  const [email, setEmail] = useState('mail@example.com')

  return (
    <div>
      {/* 同一コンポーネントを使用して、デザインは使い回しつつinputタグ用の属性は変更できる＆型チェックできる！ */}
      <p>名前</p>
      <Input value={name} setValue={setName} type="text" notExistAttribute="型に存在しない場合はエラーになる" />
      <p>パスワード</p>
      <Input value={password} setValue={setPassword} type="password" required={true} minLength={8} maxLength={16} />
      <p>メールアドレス</p>
      <Input value={email} setValue={setEmail} type="email" maxLength={100} />
    </div>
  )
}
