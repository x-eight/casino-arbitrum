import React, { useState, useEffect,useMemo } from "react";
import {
  Flex,
  Text,
  Code,
  Grid,
  Box
} from "@chakra-ui/react";
import CustomCard from "../../components/card";
import InfoToken from "../../components/info-card";
import CustomList from "../../components/Players-list";
import { getJackpotstats, getPriceCoingecko } from "../../service/api";
import WinnerList from "../../components/Winner-list";
import useCasinuFinance from "../../hooks/useCasinuFinance";
import useTokenBalance from "../../hooks/useTokenBalance";
import { getDisplayBalance } from "../../metamask/formatBalance";
import useBalanceEth from "../../hooks/useBalanceEth";

const Dashboard = () => {
  const [CasinuPrice, setCasinuPrice] = useState(0);
  const [EthPrice, setEthPrice] = useState(0);

  const [Jackpot, setJackpot] = useState({ totalJackpot: 0,totalPlayers: 0,totalWinners: 0});
  const {casinuFinance} = useCasinuFinance();

  const casinuBalance = useTokenBalance(casinuFinance.CASINU);
  const displayCasinuBalance = useMemo(() => getDisplayBalance(casinuBalance), [casinuBalance]);
  const casinuByUser = useMemo(() => ((+displayCasinuBalance)*CasinuPrice).toFixed(2), [casinuBalance]);
  
  const ethFinance = useBalanceEth();
  const displayEthBalance = useMemo(() => ethFinance, [ethFinance]);
  const ethByUser = useMemo(() => ((+displayEthBalance)*EthPrice).toFixed(2), [ethFinance]);

  useEffect(() => {
    const interval = setInterval(() => {
      getJackpotstats().then(Jackpotstat => {
        setJackpot(Jackpotstat)
      })
      .catch(error => console.log(error));
    }, 5000); // 10 segundos

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const firstPlayers = async () => {
      const ethereum = await getPriceCoingecko("ethereum");
      setEthPrice(ethereum);

      const casinu = await getPriceCoingecko("casinu");
      setCasinuPrice(casinu);
    };
    firstPlayers();
  }, []);


  return (
    <Box height ="55rem" overflowY="scroll">
      <Grid
      m={"1rem 1rem 1rem 1rem"}
      templateColumns="repeat(2, 1fr)"
      templateRows="11.5rem 13rem 11.5rem 25rem"
      gap={4}
    >
      <CustomCard title="Total Jackpot Distributed">
        <Text fontWeight="bold" color={"#854b19"} fontSize="3rem">
          ${Jackpot.totalJackpot}
        </Text>
      </CustomCard>

      <CustomCard title="Total Players">
        <Flex flexDir="column" alignItems="center" m="0.5rem">
          <Code
            colorScheme="purple"
            color="#ffffff"
            border="groove"
            fontFamily="mono"
          >
            Winners
          </Code>
          <Text fontWeight={"bold"} color={"#ffffff"}>
            {Jackpot.totalWinners}
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems="center" m="0.5rem">
          <Code
            colorScheme="purple"
            color="#ffffff"
            border="groove"
            fontFamily="mono"
          >
            Players
          </Code>
          <Text fontWeight={"bold"} color={"#ffffff"}>
            {Jackpot.totalPlayers}
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
        <InfoToken token="CASINU"  average={ displayCasinuBalance}  value={casinuByUser}/>
        <InfoToken token="ETH"  average={displayEthBalance.toFixed(4)}  value={ethByUser}/>
      </CustomCard>

      <CustomCard title="Your Jackpot winnings">
        <Text fontWeight="bold" color={"#854b19"} fontSize="3rem">
          $0.00
        </Text>
      </CustomCard>
      <CustomCard title="Recent Players" hChildren="22rem">
        <CustomList />
      </CustomCard>
      <CustomCard title="Recent Winners" hChildren="22rem">
        <WinnerList />
      </CustomCard>
    </Grid>
    </Box>
  );
};

export default Dashboard;
