import type { NextApiRequest, NextApiResponse } from 'next'
import { ListItem } from '../../../../types/ListItem'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ListItem>,
) {
  res.status(201).json({
    id: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'A title',
    description: 'A desc',
    addedByAddress: 'An Address',
  })
}
