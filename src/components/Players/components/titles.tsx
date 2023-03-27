import React from "react";
import { Text, Flex } from "@chakra-ui/react";


const Titles = () => {

  return (
    <Flex w="100%" flexDir="row" pr="1rem" fontSize={["0.9rem", "1.1rem"]} fontFamily="Montserrat" m="1rem 0rem">
      <Flex w="25%" pl="1rem" >
        <Text color="#ffffff">Address</Text>
      </Flex>
      <Flex w="15%" justifyContent="center">
        <Text color="#ffffff">Odds</Text>
      </Flex>
      <Flex w="30%" justifyContent="center">
        <Text color="#ffffff">Time</Text>
      </Flex>
      <Flex w="15%" justifyContent="center">
        <Text color="#ffffff">Tx</Text>
      </Flex>
      <Flex w="15%" justifyContent="right" pr="1rem">
        <Text color="#ffffff">Prize</Text>
      </Flex>
    </Flex>
  );
};

export default Titles;