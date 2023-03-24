import React, { useMemo } from "react";
import { Grid } from "@chakra-ui/react";
import CustomCard from "../../components/card";
import InfoToken from "../../components/info-card";
import BuyLp from "../../components/buy-lp";
import useLottoFinance from "../../hooks/useLottoFinance";
import useTokenBalance from "../../hooks/useTokenBalance";
import { getDisplayBalance } from "../../metamask/formatBalance";

const LpUnbinder = () => {
  const lottoFinance = useLottoFinance();

  const tombBalance = useTokenBalance(lottoFinance.LOTTO);
  const displayTombBalance = useMemo(() => getDisplayBalance(tombBalance), [
    tombBalance,
  ]);

  const tshareBalance = useTokenBalance(lottoFinance.WETH);
  const displayTshareBalance = useMemo(() => getDisplayBalance(tshareBalance), [
    tshareBalance,
  ]);

  const tbondBalance = useTokenBalance(lottoFinance.USDC);
  const displayTbondBalance = useMemo(() => getDisplayBalance(tbondBalance), [
    tbondBalance,
  ]);

  return (
    <Grid m={"1rem 1rem"} templateRows="11.5rem 16rem" gap={4}>
      <CustomCard title="Your Wallet" hChildren={"8.5rem"}>
        <InfoToken token="LOTTO" average={displayTombBalance} value="0.00" />
        <InfoToken token="WETH" average={displayTshareBalance} value="0.00" />
        <InfoToken token="LOTTO-WETH LP" average={displayTbondBalance} value="0.00" />
      </CustomCard>

      <CustomCard title="LP Unbinder" hChildren={"13rem"}>
        <BuyLp />
      </CustomCard>
    </Grid>
  );
};

export default LpUnbinder;
