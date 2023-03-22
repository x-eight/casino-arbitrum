import React from "react";
import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import XImage from "../../../assets/x-symbol.png";

interface UserListItemProps {
  address: string;
  avatar: string;
  value: string;
}

function randomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

const PlayersListItem: React.FC<UserListItemProps> = ({
  address,
  avatar,
  value,
}) => {
  return (
    <Flex w="100%" h="5rem" flexDir="row">
      <Flex w="10%" justifyContent="center" alignItems="center">
        <Box w="1.5rem">
          <img src={XImage} />
        </Box>
      </Flex>
      <Flex w="70%" alignItems="center" flexDir="row">
        <Avatar
          src={avatar ?? "avatar-1.jpg"}
          bgColor={randomColor()}
          size="sm"
        />
        <Flex flexDir="column" m={"0.5rem"}>
          <Text fontSize="0.8rem" color="black">
            0x39E...2ed3d
          </Text>
        </Flex>
      </Flex>
      <Flex w="20%" justifyContent="center" alignItems="center">
        <Text color="black">{value}%</Text>
      </Flex>
    </Flex>
  );
};

export default PlayersListItem;
