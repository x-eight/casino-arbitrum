import React, { useState, useEffect } from "react";
import { Button,VStack,Box, Flex, Text, IconButton, Img,Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import BuyImage from "../../assets/buy.svg";
import NavItem from "./components/NavItem";
import GroupItems from "./components/subItem";
import TokenSymbol from "../TokenSymbol";
import { getPriceCoingecko } from "../../service/api";

//===========IMAGE==========//
import home from "../../assets/home.svg";
import competition from "../../assets/competition.svg";
import nitro from "../../assets/nitro.svg";
import dashboard from "../../assets/dashboard.png";
//=========================//

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

  const elements = [
    {
      id: 1,
      to: "/",
      name: "Home",
      image: home,
      redirect: `https://www.casinuarbitrum.xyz/`,
      subIndices: new Array<any>()
    },
    { id: 2, to: "/", name: "Dashboard", image: dashboard, redirect: "",subIndices: new Array<any>() },
    {
      id: 3,
      to: "/nitro-pool",
      name: "Nitro Pool",
      image: nitro,
      redirect: `https://app.camelot.exchange/nitro/0x761Adb257558eBebE97d65AD7aCe5DDd4d06e83d`,
      subIndices: new Array<any>()
    },
    {
      id: 5,
      to: "/competition",
      name: "Players",
      image: competition,
      redirect: "",
      subIndices: new Array<any>()
    },
    {
      id: 6,
      to: "",
      name: "Games",
      image: competition,
      redirect: "",
      subIndices: [{
        id: 7,
        to: "/competition",
        name: "Jackpot",
        image: nitro,
        redirect: "",
      },
      {
        id: 8,
        to: "/competition",
        name: "Minipot",
        image: competition,
        redirect: "",
      }]
    },
  ];

  return (
    <Flex
      backgroundColor={"#181A25"}
      w={navSize ? "3.5rem" : "14rem"}
      flexDir="column"
      justifyContent="space-between"
      fontFamily="Tilt Neon"
    >
      <Flex
        flexDir="column"
        w="100%"
        alignItems={navSize ? "center" : "flex-start"}
      >
        <IconButton
          aria-label="Search database"
          p={"1rem"}
          background="none"
          icon={<HamburgerIcon />}
          onClick={() => {
            if (navSize) changeNavSize(false);
            else changeNavSize(true);
          }}
        />

        <Flex alignSelf="center" flexDir="column">
          {elements.map((n, i) => (n.subIndices.length>0?(
            <GroupItems
            id={i}
            name={n.name}
            image={n.image}
            navSize={navSize}
            selectedButton={selectedButton}
            isSelected={selectedButton === i}
            setSelectedButton={setSelectedButton}
            subIndices={n.subIndices}
          />
          ):(
            <NavItem
            id={i}
            to={n.to}
            name={n.name}
            image={n.image}
            navSize={navSize}
            redirect={n.redirect}
            isSelected={selectedButton === i}
            clickEvent={() => handleButtonClick(i)}
          />
          )))}
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
                backgroundColor="#EEBA35"
                borderRadius="2.5rem"
                justifyContent="center"
                alignItems="center"
              >
                <Img w="2rem" h="2rem" src={BuyImage} />
              </Flex>
            ) : (
              <Flex
                borderRadius="3rem"
                backgroundColor="#EEBA35"
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
              justifyContent="space-evenly"
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
