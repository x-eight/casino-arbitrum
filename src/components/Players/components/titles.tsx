import React from "react";
import { Text, Flex } from "@chakra-ui/react";


const Titles = () => {

  return (
    <Flex w="100%" flexDir="row" pr="1rem" fontSize={["0.9rem", "1.1rem"]} fontFamily="Tilt Neon" m="1rem 0rem">
      <Flex w="30%" justifyContent="center">
        <Text color="#ffffff">Address</Text>
      </Flex>
      <Flex w="15%" justifyContent="center">
        <Text color="#ffffff">Odds</Text>
      </Flex>
      <Flex w="25%" justifyContent="center">
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