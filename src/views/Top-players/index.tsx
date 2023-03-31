import { useState } from "react";
import { Flex, Text, Box, Divider } from "@chakra-ui/react";
import TopList from "../../components/Top-players";
import ColumTitles from "../../components/Top-players/components/titles";
import Filter from "../../components/Top-players/components/filter";

const TopPlayer = () => {
  const [skip, setSetSkip] = useState(0); //1->next  2->preview
  const [hasMore, setHasMore] = useState(true);

  return (
    <Box h="30vh" fontFamily="Montserrat" fontWeight={"bold"}>
      <Flex
        m={"3rem auto 0rem auto"}
        flexDir="column"
        w="80%"
        p="1.5rem 0rem"
        borderRadius="1rem"
        background="#1E232F"
        minHeight="70vh"
        borderTop="4px solid #252A3f"
      >
        <Text
          color="#ffffff"
          fontWeight="bold"
          fontSize="1.5rem"
          pl="2.5rem"
        >
          Top Players
        </Text>
        <Text color="#ffffff" pl="2.5rem">
          Start : 2023-03-17 06:00 PM UTC
        </Text>
        <Text color="#ffffff" mb="1rem" pl="2.5rem">
          End : 2023-03-24 06:00 PM UTC
        </Text>
        <ColumTitles />
        <hr style={{borderColor:"#17181c", width:"100%" }}/>
        <Filter skip={skip} setSetSkip={setSetSkip} hasMore={hasMore} />
        <hr style={{borderColor:"#17181c", width:"100%" }}/>
        <TopList skip={skip} setHasMore={setHasMore} />
      </Flex>
    </Box>
  );
};

export default TopPlayer;
