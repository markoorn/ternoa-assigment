import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { ListItem } from '../types/ListItem';

type Props = {
  onClick: () => void;
  item: ListItem;
};

export default function ContentCard({ item, onClick }: Props) {
  return (
    <motion.div
      className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-5"
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <div
        className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden z-10"
        onClick={onClick}
      >
        <div className="relative pb-48 overflow-hidden">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={item.imageUrl}
            objectFit={'cover'}
            layout={'fill'}
            alt=""
          />
        </div>
        <div className="px-4">
          <h2 className="mt-2 mb-2  font-bold">{item.title}</h2>
          <p className="text-sm h-20 overflow-clip">{item.description}</p>
        </div>
        <div className="p-4 border-t border-b text-xxs text-gray-700">
          <span className="flex items-center p-1">
            Added by: {item.addedByAddress}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
