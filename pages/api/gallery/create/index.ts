import type { NextApiRequest, NextApiResponse } from 'next';
import { ListItem } from '../../../../types/ListItem';
import prisma from '../../../../prisma/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ListItem>,
) {
  const { title, description, imageUrl, addedByAddress } = req.body;
  const newItem = await prisma.gallery.create({
    data: {
      title,
      description,
      imageUrl,
      addedByAddress,
    },
  });

  res.status(201).json(newItem);
}
