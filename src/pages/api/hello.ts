import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  name: string
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.status(200).json({ name: 'Olá, mundo!' })
}

export default handler
