import React from "react";
import { Flex, Text, Code, Input, Button } from "@chakra-ui/react";
import TokenSymbol from "../TokenSymbol";

interface BuyLpProps {
  title?: string;
  token?: string;
  average?: string;
  value?: string;
}

const BuyLp: React.FC<BuyLpProps> = ({ title, token, average, value }) => {
  return (
    <Flex flexDir="column" w="25rem">
      <Code
        colorScheme="purple"
        color="black"
        border="groove"
        fontFamily="mono"
        w="15%"
      >
        $0.00
      </Code>
      <Input
        color="black"
        borderColor="gray.300"
        borderWidth="1px"
        placeholder="0"
        _placeholder={{ opacity: 1, color: "gray.500" }}
        textAlign="right"
        size="sm"
        w="100%"
      />
      <Text color="black" fontSize="0.9rem" alignSelf="flex-end">Balance :
        <span style={{color:"red",fontWeight:"bold"}}>
            0.00 LOTTO-WETH LP
        </span>
      </Text>
      <Code
        colorScheme="purple"
        color="black"
        border="groove"
        fontFamily="mono"
        w="15%"
        alignSelf="flex-end"
      >
        $0.00
      </Code>
      <Button colorScheme="red" size="sm" w="100%" mt="0.5rem">
        Approve
      </Button>
    </Flex>
  );
};

export default BuyLp;
