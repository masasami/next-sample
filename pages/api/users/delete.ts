import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const ids = req.body.ids as string[]
  const message = `IDが${ids.join('、')}のユーザーを削除しました`

  res.status(200).json({ message })
}
