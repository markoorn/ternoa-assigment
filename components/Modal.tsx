import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { ListItem } from '../types/ListItem';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';

type Props = {
  address: string;
  item?: ListItem;
  isVisible: boolean;
  onClose: () => void;
  onItemUpdated: (item: ListItem) => void;
  onItemAdded: (item: ListItem) => void;
  onItemDeleted: (id: number) => void;
};

export default function Modal({
  address,
  isVisible,
  onClose,
  item,
  onItemAdded,
  onItemUpdated,
  onItemDeleted,
}: Props) {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    image: Yup.string().required('Image is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  let [newOrUpdatedItem, setNewOrUpdatedItem] = useState<ListItem>();

  let [loading, setLoading] = useState(false);

  useEffect(() => {
    if (item) {
      setNewOrUpdatedItem(item);
    }
  }, [item]);

  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === 'wrapper') {
      onClose();
    }
  };

  const handleOnChange = (itemKey: string, value: string) => {
    if (newOrUpdatedItem) {
      setNewOrUpdatedItem({
        ...newOrUpdatedItem,
        [itemKey]: value,
      });
    }
  };

  async function handleUpload(e: any) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'ternoa-upload');

    setLoading(true);
    const result = await axios.post(
      'https://api.cloudinary.com/v1_1/silverstag/image/upload',
      formData,
    );

    const itemCopy = { ...newOrUpdatedItem };
    itemCopy.imageUrl = result.data.secure_url;
    setNewOrUpdatedItem(itemCopy);
    setLoading(false);
  }

  const onDeleteItem = async (e: any) => {
    e.preventDefault();
    const result = await axios.delete(`api/gallery/${newOrUpdatedItem.id}`);
    console.log(`successfully deleted item with id: ${result.data.id}`);
    onItemDeleted(result.data.id);
    onClose();
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (newOrUpdatedItem?.id) {
      const result = await axios.put(
        `/api/gallery/${newOrUpdatedItem?.id}`,
        newOrUpdatedItem,
      );

      console.log(`Sucessfully updated item with id: ${result.data.id}`);
      onItemUpdated(result.data);
    } else {
      newOrUpdatedItem.addedByAddress = address;
      const result = await axios.post(`/api/gallery/create`, newOrUpdatedItem);
      console.log(`Successfully created item with id: ${result.data.id}`);
      onItemAdded(result.data);
    }

    onClose();
  };

  const renderEditScreen = () => {
    return (
      <form
        className="w-full max-w-sm container mt-20 mx-auto px-4"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Image
          </label>
          {loading && <p>Uploading...</p>}
          {!loading && newOrUpdatedItem?.imageUrl && (
            <div className="relative pb-64 w-full overflow-hidden mb-4">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={newOrUpdatedItem.imageUrl}
                layout={'fill'}
                objectFit={'cover'}
                alt=""
              />
            </div>
          )}
          <input
            accept="image/*"
            disabled={loading}
            type="file"
            onChange={(e) => handleUpload(e)}
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Title
          </label>
          <input
            disabled={loading}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
            value={newOrUpdatedItem?.title || ''}
            onChange={(e) => handleOnChange('title', e.target.value)}
            type="text"
            placeholder="Enter title"
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            disabled={loading}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline h-32"
            value={newOrUpdatedItem?.description || ''}
            onChange={(e) => handleOnChange('description', e.target.value)}
            placeholder="Enter description"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="block mt-5 bg-blue-400 w-full mx-1 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
            {newOrUpdatedItem?.id ? 'Save changes' : 'Add Item'}
          </button>
          {newOrUpdatedItem?.id && (
            <button
              onClick={(e) => onDeleteItem(e)}
              className="block mt-5 bg-red-400 w-full mx-1 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline"
            >
              Delete Item
            </button>
          )}
        </div>
      </form>
    );
  };

  return (
    <motion.div
      initial={{
        x: 1000,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="fixed right-0 bottom-0 left-0 top-0 bg-black bg-opacity-75 backdrop-blur-sm flex justify-center items-center z-100"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="fixed right-0 mx-auto flex flex-col bg-white h-full w-1/2  md:w-1/3 sm:w-full justify-center items-center">
        {renderEditScreen()}
      </div>
    </motion.div>
  );
}
