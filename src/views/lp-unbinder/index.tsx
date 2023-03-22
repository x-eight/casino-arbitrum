import React from "react";
import {
  Flex,
  Text,
  Code,
  Grid,
} from "@chakra-ui/react";
import CustomCard from "../../components/card";
import InfoToken from "../../components/info-card";
import BuyLp from "../../components/buy-lp";

const LpUnbinder = () => {
    return (
      <Grid
      m={"5rem 1rem"}
      templateRows="11.5rem 16rem"
      gap={4}
    >
      <CustomCard title="Your Wallet" hChildren={"8.5rem"}>
        <InfoToken token="LOTTO"  average="0"  value="0.00"/>
        <InfoToken token="ETH"  average="0"  value="0.00"/>
        <InfoToken token="LOTTO"  average="0"  value="0.00"/>
      </CustomCard>

      <CustomCard title="LP Unbinder" hChildren={"13rem"}>
        <BuyLp/>
      </CustomCard>

    </Grid>
    )
  }
  
  export default LpUnbinder