import { useCallback, useEffect, useState } from "react";
import { BigNumber } from "ethers";

import useLottoFinance from "./useLottoFinance";
import config from "../config";
import ERC20 from "../arbitrum-one/ERC20";

const useTokenBalance = (token: ERC20) => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const lottoFinance = useLottoFinance();
  const isUnlocked = lottoFinance?.isUnlocked;

  const fetchBalance = useCallback(async () => {
    setBalance(await token.balanceOf(lottoFinance?.myAccount ?? ""));
  }, [token, lottoFinance?.myAccount]);

  useEffect(() => {
    if (isUnlocked) {
      fetchBalance().catch((err) =>
        console.error(`Failed to fetch token balance: ${err.stack}`)
      );
      let refreshInterval = setInterval(fetchBalance, config.refreshInterval);
      return () => clearInterval(refreshInterval);
    }
  }, [isUnlocked, token, fetchBalance, lottoFinance]);

  return balance;
};

export default useTokenBalance;
