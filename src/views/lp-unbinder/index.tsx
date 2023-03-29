import { useMemo } from "react";
import { Grid } from "@chakra-ui/react";
import CustomCard from "../../components/card";
import InfoToken from "../../components/info-card";
import BuyLp from "../../components/buy-lp";
import useCasinuFinance from "../../hooks/useCasinuFinance";
import useTokenBalance from "../../hooks/useTokenBalance";
import { getDisplayBalance } from "../../metamask/formatBalance";

const LpUnbinder = () => {
  const {casinuFinance} = useCasinuFinance();

  const casinuBalance = useTokenBalance(casinuFinance.CASINU);
  const displayCasinuBalance = useMemo(() => getDisplayBalance(casinuBalance), [
    casinuBalance,
  ]);

  const tshareBalance = useTokenBalance(casinuFinance.WETH);
  const displayTshareBalance = useMemo(() => getDisplayBalance(tshareBalance), [
    tshareBalance,
  ]);

  const tbondBalance = useTokenBalance(casinuFinance.USDC);
  const displayTbondBalance = useMemo(() => getDisplayBalance(tbondBalance), [
    tbondBalance,
  ]);

  return (
    <Grid m={"1rem 1rem"} templateRows="11.5rem 16rem" gap={4}>
      <CustomCard title="Your Wallet" hChildren={"8.5rem"}>
        <InfoToken token="CASINU" average={displayCasinuBalance} value="0.00" />
        <InfoToken token="WETH" average={displayTshareBalance} value="0.00" />
        <InfoToken token="CASINU-WETH LP" average={displayTbondBalance} value="0.00" />
      </CustomCard>

      <CustomCard title="LP Unbinder" hChildren={"13rem"}>
        <BuyLp />
      </CustomCard>
    </Grid>
  );
};

export default LpUnbinder;
