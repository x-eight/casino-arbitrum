import { useCallback, useEffect, useState } from "react";
import useCasinuFinance from "./useCasinuFinance";
import config from "../config";

const useBalanceEth = () => {
  const [balanceEth, setBalanceEth] = useState<number>(0);
  const casinuFinance = useCasinuFinance();

  const fetchBalanceEth = useCallback(async () => {
    setBalanceEth(await casinuFinance.getEthBalance());
  }, [casinuFinance]);

  useEffect(() => {
    fetchBalanceEth().catch((err) =>
      console.error(`Failed to fetch ETH price: ${err.stack}`)
    );
    const refreshInterval = setInterval(
      fetchBalanceEth,
      config.refreshInterval
    );
    return () => clearInterval(refreshInterval);
  }, [setBalanceEth, casinuFinance, fetchBalanceEth]);

  return balanceEth;
};

export default useBalanceEth;
