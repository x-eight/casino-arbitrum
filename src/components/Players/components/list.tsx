import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import TokenSymbol from "../../TokenSymbol";

interface UserListItemProps {
  index: number;
  address: string;
  created_at: string;
  odds: number;
  tx?: string;
  prize?: number;
}

const ListItem: React.FC<UserListItemProps> = ({
  index,
  address,
  created_at,
  odds,
  tx,
  prize,
}) => {
  return (
    <Flex
      w="100%"
      flexDir="row"
      fontFamily="Tilt Neon"
      fontSize="1.4rem"
      background={index % 2 === 0 ? "#1E232F" : "index"}
    >
      <Flex w="35%" justifyContent="center" alignItems="center">
        <Text color="#ffffff">
          {address ? `${address.slice(0, 6)}...${address.slice(38, 43)}` : ""}
        </Text>
      </Flex>
      <Flex w="15%" justifyContent="center" alignItems="center">
        <Text color="#ffffff">{odds}%</Text>
      </Flex>
      <Flex w="20%" justifyContent="center" alignItems="center">
        <Text color="#ffffff">{created_at}</Text>
      </Flex>
      <Flex w="15%" justifyContent="center" alignItems="center">
        <a
          href={`https://arbiscan.io/tx/${tx}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Box w="1.5rem" color="#EEBA35">
            <TokenSymbol symbol="ARBITRUM" size="3.5rem" width={"3.5rem"} />
          </Box>
        </a>
      </Flex>
      <Flex w="15%" justifyContent="center" alignItems="center">
        <Text color="#EEBA35">{`$ ${prize}`}</Text>
      </Flex>
    </Flex>
  );
};

export default ListItem;
