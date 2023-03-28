import { useState, useEffect } from "react";
import { Flex, Text, Button, Box } from "@chakra-ui/react";

import { getJackpotstats } from "../../service/api";
import RecentPlayers from "../../components/Players/recents";
import WinnerPlayers from "../../components/Players/winners";
import Titles from "../../components/Players/components/titles";
import { SelectPlayers } from "./selectList";
import "./jackpot.css"

const Jackpot = () => {
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
    <Box >
      <Flex
        h="auto"
        p="4vh"
        justifyContent="space-evenly"
        alignItems="center"
      >
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
              fontSize={["0.5rem","1rem","1rem","1.5rem","1.5rem"]}
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
              fontSize={["0.5rem","1rem","1rem","1.5rem","1.5rem"]}
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
        className="customHeight"
        m={"0rem auto"}
        flexDir="column"
        w="80%"
        borderRadius="1rem"
        background="#252A34"
      >
        <Titles />
        <Flex fontFamily="Montserrat" background="#1E232F" p="0.5rem 2rem 0.5rem 1.2rem">
          <Button
            variant="unstyled"
            m="0rem 1rem"
            color={typePlayers===1 ? "#EEBA35" : "#ffffff"}
            _hover={{ /*color: "#EEBA35" */}}
            onClick={() => {
              setTypePlayers(1);
            }}
            fontSize="0.9rem" 
          >
            Recents
          </Button>
          <Button
            variant="unstyled"
            m="0rem 1rem"
            color={typePlayers===2 ? "#EEBA35" : "#ffffff"}
            _hover={{ /*color: "#EEBA35" */}}
            onClick={() => {
              setTypePlayers(2);
            }}
            fontSize="0.9rem"
          >
            Winners
          </Button>
          <Button
            variant="unstyled"
            m="0rem 1rem"
            color={typePlayers===3 ? "#EEBA35" : "#ffffff"}
            _hover={{ /*color: "#EEBA35" */}}
            onClick={() => {
              setTypePlayers(3);
            }}
            fontSize="0.9rem"
          >
            My Tickets
          </Button>
        </Flex>
        {SelectPlayers(typePlayers)}
      </Flex>
    </Box>
  );
};

export default Jackpot;