import { NextApiRequest, NextApiResponse } from 'next'

const users = [
  { id: 1, name: 'ユーザー１' },
  { id: 2, name: 'ユーザー２' },
  { id: 3, name: 'ユーザー３' },
]
export default (req: NextApiRequest, res: NextApiResponse) => {
  const id = Number(req.query.id)
  const user = users.find((user) => user.id === id)

  res.status(200).json(user)
}
