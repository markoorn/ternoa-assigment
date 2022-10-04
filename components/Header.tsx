import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  onWalletConnect: (address: string) => void;
};

export default function Header({ onWalletConnect }: Props) {
  const [currentAccount, setCurrentAccount] = useState(null);

  const createItem = () => {
    console.log('HERE');
  };
  const connectWallet = async () => {
    try {
      const { ethereum } = window as any;

      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
      onWalletConnect(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-300 sticky top-0 z-20 ">
      <header className="p-3 flex items-starts justify-between max-w-7xl mx-auto  xl:items-center ">
        <motion.div
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
          className="flex flex-row items-center"
        >
          {currentAccount && <p>Your address is: {currentAccount}</p>}
          {!currentAccount && <p>Connect your wallet to get started!</p>}
        </motion.div>
        <motion.div
          initial={{
            x: 500,
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
          {!currentAccount && (
            <button
              className="inline-block px-5 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs uppercase rounded shadow-md hover:bg-gray-300 active:bg-gray-400"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
          {currentAccount && (
            <button
              className="inline-block px-5 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs uppercase rounded shadow-md hover:bg-gray-300 active:bg-gray-400"
              onClick={createItem}
            >
              Create item
            </button>
          )}
        </motion.div>
      </header>
    </div>
  );
}
