import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Avatar } from "@chakra-ui/react";

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
  //size="sm
  return (
    <>
    <Flex w="100%" h="5rem" p="0rem 2.5rem" justifyContent="space-between" flexDir="row" key={index} background={index % 2 === 0 ? "#252A34" : "none"}>
      <Flex alignItems="center" flexDir="row">
      <Box color="#EEBA35">
          {index === 0 ? (
            <>🥇</>
          ) : index === 1 ? (
            <>🥈</>
          ) : index === 2 ? (
            <>🥉</>
          ) : (
            <Box m="0.3rem">{index+1}</Box>
          )}
        </Box>
        <Avatar
          src={avatar ?? "avatar-1.jpg"}
          bgColor={colorAvatar}
          w="2rem"
          h="2rem"
          m="0rem 1.5rem"
        />
        <Flex flexDir="column">
          <Text fontSize="1rem" color="#ffffff" >
            {address?`${address.slice(0, 6)}...${address.slice(38, 43)}`:""}
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center">
        <Text color="#EEBA35">$ {amount.toFixed(2)}</Text>
      </Flex>
    </Flex>
    <hr style={{borderColor:"#17181c", width:"100%" }}/>
    </>
  );
};

export default PlayersListItem;