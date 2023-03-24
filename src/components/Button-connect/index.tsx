import React, { useState } from "react";
import {
    Button,
    Flex,
    Spacer,
  } from "@chakra-ui/react";
import { connectWallet } from "../../metamask/web3";
import { Address } from "../Address";


const CustomButtom = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [walletBalance, setWalletBalance] = useState(0);

  const setWallet = async () => {
    const wallets = await connectWallet();
    if (wallets) {
      setWalletAddress(wallets.address);
      setWalletBalance(wallets.balance);
    }
  };
  
    return (
    <Flex w={"100%"} m="0.5rem 0rem" >
        <Spacer />
        {walletAddress ? (
          <Address
            address={walletAddress}
            balance={walletBalance}
            setWalletAddress={setWalletAddress}
          />
        ) : (
          <Button
            m="1vh"
            backgroundColor="#854b19"
            colorScheme="white"
            w="20vh"
            h="5vh"
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