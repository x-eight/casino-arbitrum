import React from "react";
import { Text, Flex } from "@chakra-ui/react";


const ColumTitles = () => {
    return (
      <Flex w="100%" h="2rem" flexDir="row">
        <Flex w="10%" justifyContent="center"></Flex>
        <Flex w="70%" justifyContent="center">
          <Text color="#ffffff" fontWeight="bold">Player</Text>
        </Flex>
        <Flex w="20%" justifyContent="center">
          <Text color="#ffffff" fontWeight="bold">Amount</Text>
        </Flex>
      </Flex>
    );
  };

  export default ColumTitles;