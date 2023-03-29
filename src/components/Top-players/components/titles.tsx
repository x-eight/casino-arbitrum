import React from "react";
import { Text, Flex } from "@chakra-ui/react";

const ColumTitles = () => {
  return (
    <Flex
      w="100%"
      h="2rem"
      justifyContent="space-between"
      flexDir="row"
      p="0rem 2.5rem 0rem 9.5rem"
    >
      <Text color="#ffffff" fontWeight="bold" fontSize="1.2rem">
        Address
      </Text>
      <Text color="#ffffff" fontWeight="bold" fontSize="1.2rem">
        Amount
      </Text>
    </Flex>
  );
};

export default ColumTitles;
