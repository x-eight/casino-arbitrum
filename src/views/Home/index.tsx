import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import TopList from "../../components/Top-list";

const Competition = () => {
  return (
    <Box height="55rem" overflowY="scroll">
      <Flex
        m={"1rem auto 0rem auto"}
        flexDir="column"
        w="99%"
        p="2rem"
        borderRadius="1rem"
        style={{
          backgroundColor: "rgba(0,0,0,.7)",
          width: "99%",
          height: "auto",
          content: "none",
        }}
      >
        <Text color="#ffffff" fontWeight="bold" fontSize="2rem">
          Top Players
        </Text>
        <Text color="#ffffff">Start : 2023-03-17 06:00 PM UTC</Text>
        <Text color="#ffffff" mb="1rem">
          End : 2023-03-24 06:00 PM UTC
        </Text>
        <TopList />
      </Flex>
    </Box>
  );
};

export default Competition;
