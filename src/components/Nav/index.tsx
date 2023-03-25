import React, { useState,useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Img,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import BuyImage from "../../assets/buy.svg";
import NavItem from "./components/NavItem";
import TokenSymbol from "../TokenSymbol";
import { getPriceCoingecko } from "../../service/api";

const Sidebar = () => {
  const [navSize, changeNavSize] = useState(false);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (color: number) => {
    setSelectedButton(color);
  };
  
  const [CasinuPrice, setCasinuPrice] = useState(0);
  const [EthPrice, setEthPrice] = useState(0);

  useEffect(() => {
    const firstPlayers = async () => {
      const ethereum = await getPriceCoingecko("ethereum");
      setEthPrice(ethereum);

      const casinu = await getPriceCoingecko("casinu");
      setCasinuPrice(casinu);
    };
    firstPlayers();
  }, []);


  return (
    <Flex
      backgroundColor={"#1e1f21"}
      h="62rem"
      w={navSize ? "3.5rem" : "14rem"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        flexDir="column"
        w="100%"
        alignItems={navSize ? "center" : "flex-start"}
      >
        <IconButton
          aria-label="Search database"
          p={"1rem"}
          _hover={{ background: "none" }}
          icon={<HamburgerIcon />}
          onClick={() => {
            if (navSize) changeNavSize(false);
            else changeNavSize(true);
          }}
        />

        <Box
          alignSelf={"center"}
          display={navSize ? "none" : "flex"}
          m={"1rem 0.5rem"}
        >
          <TokenSymbol symbol="CASINU" size="10rem" />
        </Box>

        <Flex alignSelf={"center"} flexDir="column">
          <NavItem
            id={1}
            to={"/"}
            name={"Home"}
            navSize={navSize}
            redirect={`https://www.casinuarbitrum.xyz/`}
            isSelected={selectedButton === 1}
            clickEvent={() => handleButtonClick(1)}
          />
          <NavItem
            id={2}
            to={"/"}
            name={"Dashboard"}
            navSize={navSize}
            isSelected={selectedButton === 2}
            clickEvent={() => handleButtonClick(2)}
          />
          <NavItem
            id={3}
            to={"/nitro-pool"}
            name={"Nitro Pool"}
            navSize={navSize}
            redirect={`https://app.camelot.exchange/nitro/0x761Adb257558eBebE97d65AD7aCe5DDd4d06e83d`}
            isSelected={selectedButton === 3}
            clickEvent={() => handleButtonClick(3)}
          />
          {/*
          <NavItem
            id={4}
            to={"/lp-unbinder"}
            name={"LP unbinder"}
            navSize={navSize}
            isSelected={selectedButton === 4}
            clickEvent={() => handleButtonClick(4)}
          />
          */}
          <NavItem
            id={5}
            to={"/competition"}
            name={"Competition"}
            navSize={navSize}
            isSelected={selectedButton === 5}
            clickEvent={() => handleButtonClick(5)}
          />
        </Flex>
      </Flex>

      <Flex
        flexDir="column"
        w="100%"
        alignItems="center"
        mb={navSize ? "2.5rem" : "1.5rem"}
      >
        <Flex align="center" flexDir="column">
          <a
            href={`https://app.camelot.exchange/?token1=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&token2=0x4A35cA865aBEc4205430081ccDF768610e06BfbC`}
            target="_blank"
          >
            {navSize ? (
              <Flex
                w="3rem"
                h="3rem"
                backgroundColor="#854b19"
                borderRadius="2.5rem"
                justifyContent="center"
                alignItems="center"
              >
                <Img w="2rem" h="2rem" src={BuyImage} />
              </Flex>
            ) : (
              <Flex
                borderRadius="3rem"
                backgroundColor="#854b19"
                w="9rem"
                h="2.5rem"
                justifyContent="center"
                alignItems="center"
              >
                <Img w="2rem" h="2rem" src={BuyImage} />
                <Text>Buy CASINU</Text>
              </Flex>
            )}
          </a>

          <Flex flexDir="column" display={navSize ? "none" : "flex"}>
            <Flex
              w="7rem"
              m="0.5rem"
              alignItems="center"
              justifyContent="space-between"
            >
              <TokenSymbol symbol="CASINU" size="2.5rem" />
              <Text color="#ffffff" size="sm">
              ${CasinuPrice.toFixed(2)}
              </Text>
            </Flex>
            <Flex
              w="7rem"
              m="0.5rem"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <TokenSymbol symbol="ETH" size="2.5rem" width="1.5rem" />
              <Text color="#ffffff">${EthPrice.toFixed(2)}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
