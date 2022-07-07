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
      const ext = file.originalname.split('.').pop() // 拡張子取り出し
      filename = `${uuidv4()}.${ext}` // uuidでファイル名を一意にする
      callback(null, filename)
    },
  }),
})

const handler = nextConnect<NextApiRequest, NextApiResponse>()
handler.use(upload.single('file'))
handler.post((req, res) => {
  res.status(200).json({ filename })
})

export default handler
export const config = {
  api: {
    bodyParser: false,
  },
}
