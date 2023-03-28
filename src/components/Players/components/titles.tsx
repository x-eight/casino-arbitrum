import React from "react";
import { Text, Flex } from "@chakra-ui/react";

interface TitleProps {
  ph:string
}

const Titles: React.FC<TitleProps> = ({ph}) => {

  return (
    <Flex w="100%" flexDir="row" p={`1.5rem ${ph} 0rem ${ph}`} fontSize={["0.8rem", "0.9rem"]} fontFamily="Montserrat" m="1rem 0rem">
      <Flex w="25%" >
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
      <Flex w="15%" justifyContent="flex-end" >
        <Text color="#ffffff">Prize</Text>
      </Flex>
    </Flex>
  );
};

export default Titles;