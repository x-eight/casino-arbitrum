import { useState, useEffect } from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

import { getJackpotstats } from "../../service/api";
import Titles from "../../components/Players/components/titles";
import { SelectPlayers } from "./selectList";
import "./jackpot.css";
import Filter from "../../components/Players/components/filter";

const ph = "1.5rem";

const Jackpot = () => {
  const [skip, setSetSkip] = useState(0); //1->next  2->preview
  const [hasMore, setHasMore] = useState(true);
  const [typePlayers, setTypePlayers] = useState(1);

  const [Jackpot, setJackpot] = useState({
    totalJackpot: 0,
    totalPlayers: 0,
    totalWinners: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      getJackpotstats()
        .then((Jackpotstat) => {
          setJackpot(Jackpotstat);
        })
        .catch((error) => console.log(error));
    }, 5000); // 10 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Flex h="auto" p="4vh" justifyContent="space-evenly" alignItems="center">
        <Flex
          flexDir="column"
          background="#1E232F"
          borderRadius="1rem"
          w="30%"
          h="7rem"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontFamily="Montserrat"
            fontSize={["0.5rem", "1rem", "1rem", "1.5rem", "1.5rem"]}
            fontWeight={"bold"}
            color={"#ffffff"}
            textAlign="center"
          >
            Current Jackpot
          </Text>
          <Text
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#EEBA35"
            fontSize="2rem"
          >
            ${Jackpot.totalJackpot}
          </Text>
        </Flex>

        <Flex
          flexDir="column"
          background="#1E232F"
          borderRadius="1rem"
          w="30%"
          h="7rem"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontFamily="Montserrat"
            fontSize={["0.5rem", "1rem", "1rem", "1.5rem", "1.5rem"]}
            fontWeight={"bold"}
            color={"#ffffff"}
            textAlign="center"
          >
            Next Jackpot
          </Text>
          <Text
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#EEBA35"
            fontSize="2rem"
          >
            ${Jackpot.totalJackpot}
          </Text>
        </Flex>
      </Flex>
      <Flex
        h="auto"
        minHeight="58vh"
        m={"0rem auto"}
        flexDir="column"
        w="80%"
        borderRadius="1rem"
        background="#252A34"
        borderTop="4px solid #252A3f"
      >
        <Titles ph={ph} />
        <hr style={{borderColor:"#17181c", width:"100%" }}/>
        <Filter
          ph={ph}
          typePlayers={typePlayers}
          setTypePlayers={setTypePlayers}
          skip={skip}
          setSetSkip={setSetSkip}
          hasMore={hasMore}
          setHasMore={setHasMore}
        />
        <hr style={{borderColor:"#17181c", width:"100%" }}/>
        {SelectPlayers(typePlayers, skip, setSetSkip, setHasMore)}
      </Flex>
    </Box>
  );
};

export default Jackpot;
