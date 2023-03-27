import { Flex, Text, Box } from "@chakra-ui/react";
import TopList from "../../components/Top-players";
import ColumTitles from "../../components/Top-players/components/titles";

const TopPlayer = () => {
  return (
    <Box h="30vh" fontFamily="Montserrat" fontWeight={"bold"}>
      <Flex
        m={"3rem auto 0rem auto"}
        flexDir="column"
        w="80%"
        p="1.5rem 0rem"
        borderRadius="1rem"
        background="#1E232F"
        h="85vh"
      >
        <Text pl="2rem" color="#ffffff" fontWeight="bold" fontSize="1.5rem">
          Top Players
        </Text>
        <Text pl="1.5rem" color="#ffffff">Start : 2023-03-17 06:00 PM UTC</Text>
        <Text pl="1.5rem" color="#ffffff" mb="1rem">
          End : 2023-03-24 06:00 PM UTC
        </Text>
        <ColumTitles />
        {/* <hr color="#1E1D2D" style={{ width: "100%" }} /> */}
        <TopList />
      </Flex>
    </Box>
  );
};

export default TopPlayer;