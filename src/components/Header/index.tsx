import React, { useState } from "react";
import {
    Button,
    Flex,
    Spacer,
  } from "@chakra-ui/react";
import { connectWallet } from "../../metamask/web3";
import { Address } from "../Address";
import useCasinuFinance from "../../hooks/useCasinuFinance";


const Header = () => {
  const {updateAccount} = useCasinuFinance();
  const [walletAddress, setWalletAddress] = useState("");

   // @ts-ignore
   window.ethereum.on("accountsChanged", async () => {
    const wallets = await connectWallet();
    if (wallets) {
      updateAccount(wallets.address)
    }
  });

  const setWallet = async () => {
    const wallets = await connectWallet();
    if (wallets) {
      //updateMetamaskConnection(true)
      setWalletAddress(wallets.address);
      updateAccount(wallets.address)
    }
  };
  
    return (
    <Flex background="#252A34" fontFamily="Tilt Neon">
        <Spacer />
        {walletAddress ? (
          <Address
            address={walletAddress}
            setWalletAddress={setWalletAddress}
          />
        ) : (
          <Button
            m="1vh"
            backgroundColor="#EEBA35"
            colorScheme="white"
            w="11rem"
            fontWeight="bold"
            color="white"
            onClick={() => setWallet()}
          >
            Connect wallet
          </Button>
        )}
      </Flex>
  );
};

export default Header;