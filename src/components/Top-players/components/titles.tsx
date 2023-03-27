import React from "react";
import { Text, Flex } from "@chakra-ui/react";


const ColumTitles = () => {
    return (
      <Flex w="100%" h="2rem" flexDir="row" pr="1rem">
        <Flex w="10%" justifyContent="center"></Flex>
        <Flex w="70%" justifyContent="center">
          <Text color="#ffffff" fontWeight="bold" fontSize="1.2rem">Address</Text>
        </Flex>
        <Flex w="20%" justifyContent="center">
          <Text color="#ffffff" fontWeight="bold" fontSize="1.2rem">Amount</Text>
        </Flex>
      </Flex>
    );
  };

  export default ColumTitles;