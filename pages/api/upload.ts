import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import path from 'path'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'

let filename = null
const upload = multer({
  storage: multer.diskStorage({
    destination: path.resolve('./public', 'uploads'),
    filename: (req, file, callback) => {
      const ext = file.originalname.split('.').pop()
      // uuidでファイル名を一意にする
      filename = `${uuidv4()}.${ext}`
      callback(null, filename)
    },
  }),
})

const handler = nextConnect<NextApiRequest, NextApiResponse>()
handler.use(upload.single('file'))
handler.post((req, res) => {
  res.status(200).send({ filename })
})

export default handler
export const config = {
  api: {
    bodyParser: false,
  },
}
