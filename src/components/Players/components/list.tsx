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
    <>
    <Flex
      w="100%"
      flexDir="row"
      fontFamily="Montserrat"
      fontSize={["0.7rem", "0.8rem"]}
      textAlign="center"
      background={index % 2 !== 0 ? "#1E232F" : "none"}
      p="0.3rem 1.5rem"
    >
      <Flex w="25%" alignItems="center">
        <Text fontWeight="bold" color="#ffffff">
          {address ? `${address.slice(0, 6)}...${address.slice(38, 43)}` : ""}
        </Text>
      </Flex>
      <Flex w="15%" justifyContent="center" alignItems="center">
        <Text fontWeight="bold" color="#077307">{odds}%</Text>
      </Flex>
      <Flex w="30%" justifyContent="center" alignItems="center">
        <Text fontWeight="bold" color="#ffffff">{created_at}</Text>
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
      <Flex w="15%" justifyContent="flex-end" alignItems="center">
        <Text fontWeight="bold" color="#EEBA35">{`$ ${prize}`}</Text>
      </Flex>
    </Flex>
    <hr style={{borderColor:"#17181c", width:"100%" }}/>
    </>
  );
};

export default ListItem;
