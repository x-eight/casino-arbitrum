import React from "react";
import { Flex, Text, Code, Box } from "@chakra-ui/react";
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
          color="#ffffff"
          border="groove"
          fontFamily="mono"
          m="0.8rem"
        >
          {title}
        </Code>
      ) : null}
      <Flex flexDir="row" justifyContent="space-between">
        {token !== "LOTTO-WETH LP" ? (
          <TokenSymbol symbol={token} size="3.5rem" width={"3.5rem"} />
        ) : (
          <Flex flexDir="row">
            <TokenSymbol
              symbol="LOTTO"
              size="3.5rem"
              width="3.5rem"
            />
            <TokenSymbol
              symbol="WETH"
              size="3.5rem"
              width="3.5rem"
            />
          </Flex>
        )}
        <Flex flexDir="column" alignItems="center">
          <Text fontSize={"1.5vh"} textAlign="center" color={"#ffffff"} >
            {token}
          </Text>
          <Text fontWeight={"bold"} color="#854b19">
            {average}
          </Text>
          <Text fontSize={"1.5vh"} color={"#ffffff"}>
            {`($${value})`}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InfoToken;
