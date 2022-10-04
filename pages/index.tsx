import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ContentCard from '../components/ContentCard';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { ListItem } from '../types/ListItem';

const Home: NextPage = () => {
  const [displayModal, setDisplayModal] = useState(false);
  let [address, setAddress] = useState('');
  let [items, setItems] = useState<ListItem[]>([]);
  let [selectedItem, setSelectedItem] = useState<ListItem | undefined>(
    undefined,
  );

  const fetchItems = async () => {
    const { data } = await axios.get('/api/gallery');
    setItems(data);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const onWalletConnect = (address: string) => {
    console.log('Wallet connected: ', address);
    setAddress(address);
  };

  const selectItem = (id: number) => {
    if (address) {
      const selectedItem = items.find((item) => item.id === id);
      setSelectedItem(selectedItem);
      setDisplayModal(true);
    }
  };

  const onCreateItemClicked = () => {
    if (address) {
      setSelectedItem(undefined);
      setDisplayModal(true);
    }
  };

  const onItemDeleted = (id: number) => {
    const index = items.findIndex((i: ListItem) => i.id === id);
    if (index !== -1) {
      const itemsCopy = [...items];
      itemsCopy.splice(index, 1);
      setItems(itemsCopy);
    }
  };

  const onItemUpdated = (item: ListItem) => {
    console.log('Item updated');
    const index = items.findIndex((i: ListItem) => i.id === item.id);
    if (index !== -1) {
      const itemsCopy = [...items];
      itemsCopy.splice(index, 1);
      itemsCopy.splice(index, 0, item);
      setItems(itemsCopy);
    }
  };

  const onItemAdded = (item: ListItem) => {
    const itemsCopy = [...items];
    itemsCopy.push(item);
    setItems(itemsCopy);
  };

  return (
    <div>
      <Head>
        <title>NFT Gallery</title>
      </Head>

      <Header
        onWalletConnect={onWalletConnect}
        onCreateItemClicked={onCreateItemClicked}
      />

      <div className="antialiased bg-gray-200 text-gray-900 font-sans p-5">
        <div className="container mx-auto max-w-7xl min-h-screen">
          <div className="flex flex-wrap -mx-4">
            {items.map((item) => (
              <ContentCard
                key={item.id}
                item={item}
                onClick={() => selectItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <Modal
        address={address}
        item={selectedItem}
        isVisible={displayModal}
        onClose={() => setDisplayModal(false)}
        onItemUpdated={onItemUpdated}
        onItemAdded={onItemAdded}
        onItemDeleted={onItemDeleted}
      />
    </div>
  );
};

export default Home;
