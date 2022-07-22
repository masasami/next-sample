import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const json = { key: 'value' }
  console.log(json)
  res.status(200).json(json)
}
