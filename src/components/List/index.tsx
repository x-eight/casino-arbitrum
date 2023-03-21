import React from "react";
import { Box, Text, Flex,Avatar } from "@chakra-ui/react";
import { players } from "./playersTest";

interface UserListItemProps {
    address: string
    //created_at: number
    avatar: string
    //Odds: number
    //tx: string
}

const UserListItem: React.FC<UserListItemProps> = ({
    address,
    //created_at,
    avatar,
    //Odds,
    //tx
  }) => {
    return (
      <Box w="150px" h="150px" p="4">
        <Avatar src={avatar} size="lg" />
        <Text mt="4">{address}</Text>
      </Box>
    );
};

const PlayerList = () => {
  return (
    <Box h="300px" overflowY="scroll">
      <Flex flexWrap="wrap">
        {players.map((u, index) => (
          <UserListItem key={index} address={u.address} avatar={u.avatar} />
        ))}
      </Flex>
    </Box>
  );
};

export default PlayerList;