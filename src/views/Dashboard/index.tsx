import React from "react";
import {
  Flex,
  Text,
  Code,
  Grid,
} from "@chakra-ui/react";
import CustomCard from "../../components/card";
import InfoToken from "../../components/info-card";
import CustomList from "../../components/Players-list";

const Dashboard = () => {
  return (
    <Grid
      m={"5rem 1rem 1rem 1rem"}
      templateColumns="repeat(2, 1fr)"
      templateRows="11.5rem 13rem 11.5rem 25rem"
      gap={4}
    >
      <CustomCard title="test">
        <Text fontWeight="bold" color={"red"} fontSize="3rem">
          $311,172.40
        </Text>
      </CustomCard>

      <CustomCard title="test">
        <Flex flexDir="column" alignItems="center" m="0.5rem">
          <Code
            colorScheme="purple"
            color="black"
            border="groove"
            fontFamily="mono"
          >
            Winners
          </Code>
          <Text fontWeight={"bold"} color={"black"}>
            99
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems="center" m="0.5rem">
          <Code
            colorScheme="purple"
            color="black"
            border="groove"
            fontFamily="mono"
          >
            Players
          </Code>
          <Text fontWeight={"bold"} color={"black"}>
            5378
          </Text>
        </Flex>
      </CustomCard>

      <CustomCard title="Jackpot">
        <InfoToken title="Current Jackpot"  token="ETH"  average="2.4087"  value="4,332.29"/>
        <InfoToken title="Next Jackpot"  token="ETH"  average="0.6375"  value="1,170.95"/>
      </CustomCard>

      <CustomCard title="Nitro Pool">
        <InfoToken title="Current Jackpot"  token="ETH"  average="16"  value="28,721.80"/>
        <InfoToken title="Next Jackpot"  token="ETH"  average="5.1838"  value="9,305.55"/>
      </CustomCard>

      <CustomCard title="Your Wallet">
        <InfoToken token="LOTTO"  average="0"  value="0.00"/>
        <InfoToken token="ETH"  average="0"  value="0.00"/>
      </CustomCard>

      <CustomCard title="Your Jackpot winnings">
        <Text fontWeight="bold" color={"red"} fontSize="3rem">
          $0.00
        </Text>
      </CustomCard>
      <CustomCard title="Recent Players" hChildren="22rem">
        <CustomList type={1}/>
      </CustomCard>
      <CustomCard title="Recent Winners" hChildren="22rem">
        <CustomList type={2}/>
      </CustomCard>
    </Grid>
  );
};

export default Dashboard;
