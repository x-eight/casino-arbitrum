import React from "react";
import { Text, Flex } from "@chakra-ui/react";


const ColumTitles = () => {

    return (
      <Flex w="100%" h="2rem" flexDir="row">
        <Flex w="10%" justifyContent="center"></Flex>
        <Flex w="65%" justifyContent="center">
          <Text color="black">Player</Text>
        </Flex>
        <Flex w="15%" justifyContent="center">
          <Text color="black">Odds</Text>
        </Flex>
        <Flex w="10%" justifyContent="center">
          <Text color="black">Tx</Text>
        </Flex>
      </Flex>
    );
  };

  export default ColumTitles;