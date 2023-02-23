import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ContentCard from '../components/ContentCard';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { ListItem } from '../types/ListItem';
import {ChainvineClient, storeReferrer} from '@chainvine/sdk/lib';

const Home: NextPage = () => {

  // useEffect(() => {
  //   const fetch = async () => {
  //     const client = new ChainvineClient({
  //       apiKey: 'afc5901f-74eb-4c35-8675-ca215107c72b',
  //       testMode: false, // optional, defaults to false. When set to true, the SDK will use the test API endpoint
  //     });
  //
  //     console.log(client);
  //       const wallet = await client.getReferralUrl('0xCAc9a84e12Ae1eFcA12601771dd61b5EAcb2d8B2');
  //
  //     console.log("Wallet info: ", wallet);
  //   } //the user's ChainVine id
  //
  //   fetch();
  // }, [])

  const [displayModal, setDisplayModal] = useState(false);
  const [address, setAddress] = useState('');
  const [items, setItems] = useState<ListItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<ListItem | undefined>(
    undefined,
  );

  const defaultItem = {
    title: '',
    description: '',
    imageUrl: '',
    addedByAddress: '',
  };

  // const fetchItems = async () => {
  //   const { data } = await axios.get('/api/gallery');
  //   setItems(data);
  // };
  // useEffect(() => {
  //   fetchItems();
  // }, []);

  const onWalletConnect = (address: string) => {
    console.log('Wallet connected: ', address);
    setAddress(address);
  };

  const selectItem = (id: number | undefined) => {
    if (address) {
      const selectedItem = items.find((item) => item.id === id);
      setSelectedItem(selectedItem);
      setDisplayModal(true);
    }
  };

  const onCreateItemClicked = () => {
    if (address) {
      setSelectedItem(defaultItem);
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
