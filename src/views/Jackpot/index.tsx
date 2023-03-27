import { useState, useEffect } from "react";
import { Flex, Text, Button, Box } from "@chakra-ui/react";

import { getJackpotstats } from "../../service/api";
import RecentPlayers from "../../components/Players/recents";
import WinnerPlayers from "../../components/Players/winners";
import Titles from "../../components/Players/components/titles";

const Jackpot = () => {
  const [isWinner, setList] = useState(false);

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
        >
          <Flex justifyContent="center" alignItems="center" height="2rem">
            <Text
              fontFamily="Tilt Neon"
              fontSize={["0.5rem","1rem","1rem","1.5rem","1.5rem"]}
              fontWeight={"bold"}
              color={"#ffffff"}
              textAlign="center"
            >
              Current Jackpot
            </Text>
          </Flex>

          <hr color="#EEBA35" />
          <Flex justifyContent="center" alignItems="center" height="7rem">
            <Text
              fontFamily="Tilt Neon"
              fontWeight="bold"
              color="#EEBA35"
              fontSize="2rem"
            >
              ${Jackpot.totalJackpot}
            </Text>
          </Flex>
        </Flex>

        <Flex
          flexDir="column"
          background="#1E232F"
          borderRadius="1rem"
          w="30%"
        >
          <Flex justifyContent="center" alignItems="center" height="2rem">
            <Text
              fontFamily="Tilt Neon"
              fontSize={["0.5rem","1rem","1rem","1.5rem","1.5rem"]}
              fontWeight={"bold"}
              color={"#ffffff"}
              textAlign="center"
            >
              Next Jackpot
            </Text>
          </Flex>

          <hr color="#EEBA35" />
          <Flex justifyContent="center" alignItems="center" height="7rem">
            <Text
              fontFamily="Tilt Neon"
              fontWeight="bold"
              color="#EEBA35"
              fontSize="2rem"
            >
              ${Jackpot.totalJackpot}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
      h="62vh"
        m={"0rem auto"}
        flexDir="column"
        w="80%"
        borderRadius="1rem"
        background="#252A34"
      >
        <Titles />
        <hr color="#1E1D2D" style={{ width: "100%" }} />
        <Flex  fontFamily="Tilt Neon" background="#1E232F">
          <Button
            variant="unstyled"
            m="0rem 1rem"
            color={isWinner ? "#ffffff" : "#EEBA35"}
            _hover={{ /*color: "#EEBA35" */}}
            onClick={() => {
              setList(false);
            }}
          >
            Recents
          </Button>
          <Button
            variant="unstyled"
            m="0rem 1rem"
            color={isWinner ? "#EEBA35" : "#ffffff"}
            _hover={{ /*color: "#EEBA35" */}}
            onClick={() => {
              setList(true);
            }}
          >
            Winners
          </Button>
          <Button
            color="white"
            variant="unstyled"
            m="0rem 1rem"
            isDisabled
            onClick={() => {
              setList(false);
            }}
          >
            My Tickets
          </Button>
        </Flex>
        <hr color="#1E1D2D" style={{ width: "100%" }} />
        {isWinner ? <WinnerPlayers /> : <RecentPlayers />}
      </Flex>
    </Box>
  );
};

export default Jackpot;