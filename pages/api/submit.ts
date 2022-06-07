// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface ResponsePayload {
  success: boolean
}

export default async function submit(
  req: NextApiRequest,
  res: NextApiResponse<ResponsePayload>
) {
  if (req.method === 'POST') {  
    try {
      res.status(200).json(req.body)
    } catch (err) {
      res.status(500).json({ success: false })
    }
  }
}
