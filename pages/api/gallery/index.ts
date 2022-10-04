import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/prisma'
import { ListItem } from '../../../types/ListItem'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ListItem[]>,
) {
  const items = await prisma.gallery.findMany()
  res.status(200).json(items)
}
