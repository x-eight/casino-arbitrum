import React, { useState, useEffect } from "react";
import { Flex, Text, IconButton, Img } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import BuyImage from "../../assets/buy.svg";
import NavItem from "./components/NavItem";
import GroupItems from "./components/subItem";
import TokenSymbol from "../TokenSymbol";
import { getPriceCoingecko } from "../../service/api";

//===========IMAGE==========//
import casino from "../../assets/home.png";
import games from "../../assets/games.png";
import trophy from "../../assets/trophy.png";
import burnboost from "../../assets/burnboost.png";
import jackpott from "../../assets/jackpott.png";
import minipott from "../../assets/minipott.png";
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
      image: casino,
      redirect: `https://www.casinuarbitrum.xyz/`,
      subIndices: new Array<any>()
    },
    //{ id: 2, to: "/", name: "Dashboard", image: dashboard, redirect: "",subIndices: new Array<any>() },
    /*
    {
      id: 3,
      to: "/nitro-pool",
      name: "Nitro Pool",
      image: nitro,
      redirect: `https://app.camelot.exchange/nitro/0x761Adb257558eBebE97d65AD7aCe5DDd4d06e83d`,
      subIndices: new Array<any>()
    },
    */
    {
      id: 4,
      to: "/BurnBoost",
      name: "Burn to Boost",
      image: burnboost,
      redirect: "",
      subIndices: new Array<any>()
    },
    {
      id: 5,
      to: "/TopPlayer",
      name: "Top Players",
      image: trophy,
      redirect: "",
      subIndices: new Array<any>()
    },
    {
      id: 6,
      to: "",
      name: "Games",
      image: games,
      redirect: "",
      subIndices: [{
        id: 7,
        to: "/games/jackpot",
        name: "Jackpot",
        image: jackpott,
        redirect: "",
      },
      {
        id: 8,
        to: "/games/minipot",
        name: "Minipot",
        image: minipott,
        redirect: "",
      }]
    },
  ];

  return (
    <Flex
      backgroundColor="#1E232F"
      w={navSize ? "3.5rem" : "12rem"}
      flexDir="column"
      justifyContent="space-between"
      fontFamily="Montserrat"
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
            index={n.id}
            key={i}
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
            key={i}
            index={n.id}
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
                <Text fontSize="0.8rem">Buy CASINU</Text>
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
