import React from "react";
import { Text, Flex } from "@chakra-ui/react";


const Titles = () => {

    return (
      <Flex w="100%" flexDir="row" fontSize="1.5rem" fontFamily="Tilt Neon" m="1rem">
        <Flex w="35%" justifyContent="center">
          <Text color="#ffffff">Player</Text>
        </Flex>
        <Flex w="15%" justifyContent="center">
          <Text color="#ffffff">Odds</Text>
        </Flex>
        <Flex w="20%" justifyContent="center">
          <Text color="#ffffff">Time</Text>
        </Flex>
        <Flex w="15%" justifyContent="center">
          <Text color="#ffffff">Tx</Text>
        </Flex>
        <Flex w="15%" justifyContent="center">
          <Text color="#ffffff">Prize</Text>
        </Flex>
      </Flex>
    );
  };

  export default Titles;