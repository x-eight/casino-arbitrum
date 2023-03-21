import React from "react";
import { Flex, Text, Code } from "@chakra-ui/react";
import TokenSymbol from "../TokenSymbol";

interface InfoTokenProps {
  title?: string;
  token: string;
  average: string;
  value: string;
}

const InfoToken: React.FC<InfoTokenProps> = ({
  title,
  token,
  average,
  value,
}) => {
  return (
    <Flex flexDir="column" alignItems="center" m="0rem 0.5rem;">
      {title ? (
        <Code
          colorScheme="purple"
          color="black"
          border="groove"
          fontFamily="mono"
          m="0.8rem"
        >
          {title}
        </Code>
      ) : null}
      <Flex flexDir="row" w="7.5rem" justifyContent="space-between">
        <TokenSymbol symbol={token} size="3.5rem" width="2rem" />
        <Flex flexDir="column" alignItems="center">
          <Text fontSize={"1.5vh"} color={"black"}>
            {token}
          </Text>
          <Text fontWeight={"bold"} color="red">
            {average}
          </Text>
          <Text fontSize={"1.5vh"} color={"black"}>
            {`$${value}`}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InfoToken;
