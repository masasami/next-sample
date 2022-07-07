import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const filename = req.query.filename as string
  const filepath = path.resolve('./public', 'uploads', filename)
  if (fs.existsSync(filepath)) {
    res.status(200).send(fs.readFileSync(filepath))
  } else {
    res.status(400).send(null)
  }
}
