import React, {useState,useEffect} from "react";
import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import FileImage from "../../../assets/file-symbol.png";
import XImage from "../../../assets/x-symbol.png";

interface UserListItemProps {
  address: string;
  created_at: string;
  avatar: string;
  odds?: number;
  tx?: string;
  value?: number;
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
  created_at,
  avatar,
  odds,
  tx,
  value,
}) => {
  const [colorAvatar, setColorAvatar] = useState("#ffffff")
  useEffect(() => {
    setColorAvatar(randomColor())
  }, [address])

  return (
    <Flex w="100%" h={value ? "4.5rem" : "3.5rem"} flexDir="row">
      <Flex w="10%" justifyContent="center" alignItems="center">
        <Box w="1.5rem">
          <img src={XImage} />
        </Box>
      </Flex>
      <Flex w="65%" alignItems="center" flexDir="row">
        <Avatar
          src={avatar ?? "avatar-1.jpg"}
          bgColor={colorAvatar}
          size="sm"
        />
        <Flex flexDir="column" m={"0.5rem"}>
          <Text fontSize="0.8rem" color="#ffffff">
            {`${address.slice(0, 6)}...${address.slice(38, 43)}`}
          </Text>
          <Text fontSize="0.8rem" color="#ffffff">
            {created_at}
          </Text>
          {value ? (
            <Text fontSize="0.8rem" color="#ffffff">
              ${value}
            </Text>
          ) : null}
        </Flex>
      </Flex>
      <Flex w="15%" justifyContent="center" alignItems="center">
        <Text color="#ffffff">{odds}%</Text>
      </Flex>
      <Flex w="10%" justifyContent="center" alignItems="center">
        <a
          href={`https://arbiscan.io/tx/${tx}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Box w="1.5rem">
            <img src={FileImage} />
          </Box>
        </a>
      </Flex>
    </Flex>
  );
};

export default PlayersListItem;
