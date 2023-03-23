import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Divider,
  Button,
  Img,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import BuyImage from "../../assets/buy.svg";
import NavItem from "./components/NavItem";
import TokenSymbol from "../TokenSymbol";

const Sidebar = () => {
  const [navSize, changeNavSize] = useState(false);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (color: number) => {
    setSelectedButton(color);
  };

  return (
    <Flex
      backgroundColor={"#1E1D2D"}
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
          background="#1E1D2D"
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
          <TokenSymbol symbol="LOTTO" size="10rem" />
        </Box>

        <Flex alignSelf={"center"} flexDir="column">
          <NavItem
            id={1}
            to={"/"}
            name={"Home"}
            navSize={navSize}
            isSelected={selectedButton === 1}
            clickEvent={() => handleButtonClick(1)}
          />
          <NavItem
            id={2}
            to={"/dashboard"}
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
            isRedirect={true}
            isSelected={selectedButton === 3}
            clickEvent={() => handleButtonClick(3)}
          />
          <NavItem
            id={4}
            to={"/lp-unbinder"}
            name={"LP unbinder"}
            navSize={navSize}
            isSelected={selectedButton === 4}
            clickEvent={() => handleButtonClick(4)}
          />
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

      <Flex flexDir="column" w="100%" alignItems="center" mb={4}>
        <Divider display={navSize ? "none" : "flex"} />
        <Flex mt={4} align="center" flexDir="column">
          <a
            href={`https://app.camelot.exchange/?token1=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&token2=0x4A35cA865aBEc4205430081ccDF768610e06BfbC`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {navSize ? (
              <Img
                w="3rem"
                h="3rem"
                src={BuyImage}
                backgroundColor="red"
                borderRadius="3rem"
              />
            ) : (
              <Button colorScheme="pink" variant="solid" w="9rem" h="2.5rem">
                <Img w="2rem" h="2rem" src={BuyImage} />
                Buy LOTTO
              </Button>
            )}
          </a>

          <Flex flexDir="column" display={navSize ? "none" : "flex"}>
            <Flex
              w="7rem"
              m="0.5rem"
              alignItems="center"
              justifyContent="space-between"
            >
              <TokenSymbol symbol="LOTTO" size="2rem" />
              <Text color="black" size="sm">
                $2.4587
              </Text>
            </Flex>
            <Flex
              w="7rem"
              m="0.5rem"
              alignItems="center"
              justifyContent="space-between"
            >
              <TokenSymbol symbol="ETH" size="2.5rem" width="1.5rem" />
              <Text color="black">$1,806.05</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
