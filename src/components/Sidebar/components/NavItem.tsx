import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface NavItemProps {
  id: number;
  navSize: boolean;
  to: string;
  name: string;
  image?: string;
  isSelected: any;
  clickEvent: (color: any) => void;
  redirect?: string;
  //setRandom: React.Dispatch<React.SetStateAction<number>>;
}

const NavItem: React.FC<NavItemProps> = ({
  id,
  to,
  name,
  image,
  navSize,
  isSelected,
  clickEvent,
  redirect,
}) => {
  return (
    <Box
      m={"0rem 0.8rem"}
      p="0.5rem"
      title={name}
      id={`box${id}`}
      w={navSize ? "auto" : "13rem"}
      borderRadius={"1rem"}
      _hover={{ background: "#323140", color: "#EEBA35" }}
      color={isSelected ? "#EEBA35" : "#ffffff"}
      bg={isSelected ? "#3e3c52" : "#181A25"}
      onClick={clickEvent}
    >
      {!redirect ? (
        <Link to={to}>
          <Flex align="center">
            <Avatar size="sm" src={image} />
            <Flex ml={"1rem"} display={navSize ? "none" : "flex"}>
              <Text>{name}</Text>
            </Flex>
          </Flex>
        </Link>
      ) : (
        <a
          href={redirect}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Flex align="center">
            <Avatar size="sm" src={image} />
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
