import React, { createContext, useEffect, useState } from 'react';
import LottoFinance from '../arbitrum-one';
import config from '../config';

type Props = {
  children: React.ReactNode;
};

export interface LottoFinanceContext {
  lottoFinance: LottoFinance;
}

export const Context = createContext<LottoFinanceContext>({ lottoFinance: new LottoFinance(config) });

export const LottoFinanceProvider: React.FC<Props> = ({ children }) => {
  // @ts-ignore
  const ethereum = window.ethereum;

  const [account, setAccount] = useState<string>("");
  const [lottoFinance, setLottoFinance] = useState<LottoFinance>(new LottoFinance(config));

  ethereum.request({ method: "eth_requestAccounts"}).then((address:string[]) =>{
    setAccount(address[0])
  } )

  useEffect(() => {
    if (!lottoFinance) {
      const tomb = new LottoFinance(config);
      if (account) {
        // wallet was unlocked at initialization
        tomb.unlockWallet(ethereum, account);
      }
      setLottoFinance(tomb);
    } else if (account) {
 
      lottoFinance.unlockWallet(ethereum, account);
    }
  }, [account, lottoFinance]);

  return <Context.Provider value={{ lottoFinance }}>{children}</Context.Provider>;
};
