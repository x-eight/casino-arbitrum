import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import XImage from "../../../assets/x-symbol.png";

interface UserListItemProps {
  address: string;
  avatar?: string;
  amount: number;
  index: number;
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
  amount,
  index,
}) => {
  const [colorAvatar, setColorAvatar] = useState("#ffffff");
  useEffect(() => {
    setColorAvatar(randomColor());
  }, [address]);
  console.log(index);

  return (
    <Flex w="100%" h="5rem" flexDir="row" key={index}>
      <Flex w="10%" justifyContent="center" alignItems="center">
        <Box color="#854b19">
          {index === 0 ? (
            <>🥇</>
          ) : index === 1 ? (
            <>🥈</>
          ) : index === 2 ? (
            <>🥉</>
          ) : (
            index+1
          )}
        </Box>
      </Flex>
      <Flex w="70%" alignItems="center" flexDir="row">
        <Avatar
          src={avatar ?? "avatar-1.jpg"}
          bgColor={colorAvatar}
          size="sm"
        />
        <Flex flexDir="column" m={"0.5rem"}>
          <Text fontSize="1rem" color="#ffffff" >
            {`${address.slice(0, 6)}...${address.slice(38, 43)}`}
          </Text>
        </Flex>
      </Flex>
      <Flex w="20%" justifyContent="center" alignItems="center">
        <Text color="#ffffff">$ {amount.toFixed(2)}</Text>
      </Flex>
    </Flex>
  );
};

export default PlayersListItem;
