import React, { useState,useContext } from "react";
import {
    Button,
    Flex,
    Spacer,
  } from "@chakra-ui/react";
import { connectWallet } from "../../metamask/web3";
import { Address } from "../Address";
import useCasinuFinance from "../../hooks/useCasinuFinance";


const CustomButtom = () => {
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
    <Flex w={"100%"} m="0.5rem 0rem" >
        <Spacer />
        {walletAddress ? (
          <Address
            address={walletAddress}
            setWalletAddress={setWalletAddress}
          />
        ) : (
          <Button
            m="1vh"
            backgroundColor="#854b19"
            colorScheme="white"
            w="11rem"
            h="3rem"
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

export default CustomButtom;