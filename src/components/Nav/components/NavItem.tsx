import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface NavItemProps {
  id: number;
  navSize: boolean;
  to: string;
  name: string;
  isSelected: any;
  clickEvent: (color: any) => void;
  isRedirect?: boolean;
  //setRandom: React.Dispatch<React.SetStateAction<number>>;
}

const NavItem: React.FC<NavItemProps> = ({
  id,
  to,
  name,
  navSize,
  isSelected,
  clickEvent,
  isRedirect = false,
}) => {

  return (
    <Box
      m={"0rem 0.8rem"}
      p="0.5rem"
      title={name}
      id={`box${id}`}
      w={navSize ? "auto" : "13rem"}
      borderRadius={"1rem"}
      _hover={{ background: "#323140",color:"#c20e0e" }}
      color={isSelected ? '#c20e0e' : '#ffffff'}
      bg={isSelected ? '#3e3c52' : '#1E1D2D'}
      onClick={clickEvent}
    >
      {!isRedirect ? (
        <Link to={to}>
          <Flex align="center">
            <Avatar size="sm" src="avatar-1.jpg" />
            <Flex ml={"1rem"} display={navSize ? "none" : "flex"}>
              <Text>{name}</Text>
            </Flex>
          </Flex>
        </Link>
      ) : (
        <a
          href={`https://app.camelot.exchange/nitro/0x761Adb257558eBebE97d65AD7aCe5DDd4d06e83d`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Flex align="center">
            <Avatar size="sm" src="avatar-1.jpg" />
            <Flex ml={"1rem"} display={navSize ? "none" : "flex"}>
              <Text>{name}</Text>
            </Flex>
          </Flex>
        </a>
      )}
    </Box>
  );
};

export default NavItem;
