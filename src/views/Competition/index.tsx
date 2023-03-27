import React, { useState, useEffect } from "react";
import { Flex, Text, Button, Grid, Box } from "@chakra-ui/react";

import {
  getJackpotstats,

} from "../../service/api";
import RecentPlayers from "../../components/Players/recents";
import WinnerPlayers from "../../components/Players/winners";

const Dashboard = () => {
  const [isWinner, setList] = useState(true);

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

  const [zoom, setZoom] = useState((window.devicePixelRatio*100<101?100.5:window.devicePixelRatio*100));

  useEffect(() => {
    const handleResize = () => {
      const height = window.devicePixelRatio*100<101?100.5:window.devicePixelRatio*100
      setZoom((height));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.devicePixelRatio]);

  return (
    <Box >
      <Flex
        h="auto"
        p="1vh"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Flex
          flexDir="column"
          backgroundColor="transparent"
          borderRadius={"1rem"}
          style={{
            backgroundColor: "rgba(0,0,0,.7)",
            width: "20%",
            height: "auto",
            content: "none",
          }}
        >
          <Flex justifyContent="center" alignItems="center" height="4rem">
            <Text
              fontFamily="Tilt Neon"
              fontSize={["1rem","1rem","1rem","1.5rem","2rem"]}
              fontWeight={"bold"}
              color={"#ffffff"}
              textAlign="center"
            >
              Current Jackpot
            </Text>
          </Flex>

          <hr color="#EEBA35" />
          <Flex justifyContent="center" alignItems="center" height="8.5rem">
            <Text
              fontFamily="Tilt Neon"
              fontWeight="bold"
              color="#EEBA35"
              fontSize="3rem"
            >
              ${Jackpot.totalJackpot}
            </Text>
          </Flex>
        </Flex>

        <Flex
          flexDir="column"
          backgroundColor="transparent"
          borderRadius={"1rem"}
          style={{
            backgroundColor: "rgba(0,0,0,.7)",
            width: "20%",
            height: "auto",
            content: "none",
          }}
        >
          <Flex justifyContent="center" alignItems="center" height="4rem">
            <Text
              fontFamily="Tilt Neon"
              fontSize={["1rem","1rem","1rem","1.5rem","2rem"]}
              fontWeight={"bold"}
              color={"#ffffff"}
              textAlign="center"
            >
              Next Jackpot
            </Text>
          </Flex>

          <hr color="#EEBA35" />
          <Flex justifyContent="center" alignItems="center" height="8.5rem">
            <Text
              fontFamily="Tilt Neon"
              fontWeight="bold"
              color="#EEBA35"
              fontSize="3rem"
            >
              ${Jackpot.totalJackpot}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
      h={zoom>105?`${zoom*0.88-27}vh`:`${zoom*0.88-19}vh`}
        m={"0rem auto"}
        flexDir="column"
        w="80%"
        borderRadius="1rem"
        background="#252A34"
      >
        <Text
          color="#ffffff"
          fontWeight="bold"
          fontSize="3rem"
          fontFamily="Tilt Neon"
          p="1rem 2rem"
        >
          Players
        </Text>
        <Text color="#ffffff" fontFamily="Tilt Neon" p="1rem 2rem">
          Date : 2023-03-17 06:00 PM UTC - 2023-03-24 06:00 PM UTC
        </Text>
        <Flex p="1rem 2rem" fontFamily="Tilt Neon">
          <Button
            colorScheme="teal"
            variant="outline"
            m="0rem 1rem"
            onClick={() => {
              setList(false);
            }}
          >
            Recents
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            m="0rem 1rem"
            onClick={() => {
              setList(true);
            }}
          >
            Winners
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            m="0rem 1rem"
            isDisabled
            onClick={() => {
              setList(false);
            }}
          >
            My Tickets
          </Button>
        </Flex>
        {isWinner ? <WinnerPlayers /> : <RecentPlayers />}
      </Flex>
    </Box>
  );
};

export default Dashboard;
