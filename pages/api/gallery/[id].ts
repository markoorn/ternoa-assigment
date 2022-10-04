import type { NextApiRequest, NextApiResponse } from 'next';
import { ListItem } from '../../../types/ListItem';
import prisma from '../../../prisma/prisma';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ListItem>,
) {
  let getGalleryItemById = async (id: number) => {
    const result = await prisma.gallery.findFirstOrThrow({
      where: {
        id,
      },
    });

    return res.status(200).json(result);
  };

  let updateGalleryItem = async (id: number, item: ListItem) => {
    const result = await prisma.gallery.update({
      where: {
        id,
      },
      data: {
        title: item.title,
        description: item.description,
        imageUrl: item.imageUrl,
      },
    });

    return res.status(200).json(result);
  };

  let deleteGalleryItemById = async (id: number) => {
    const result = await prisma.gallery.delete({
      where: {
        id,
      },
    });

    return res.status(202).json(result);
  };

  // console.log('Received request: ', req);

  switch (req.method) {
    case 'GET':
      return getGalleryItemById(Number(req.query.id));
    case 'PUT':
      return updateGalleryItem(Number(req.query.id), req.body);
    case 'DELETE':
      return deleteGalleryItemById(Number(req.query.id));
    default:
      return res.status(405).end(`Method ${req.method} not allowed`);
  }
}
