import React, { createContext, useEffect, useState } from 'react';
import CasinuFinance from '../arbitrum-one';
import config from '../config';

type Props = {
  children: React.ReactNode;
};

export interface CasinuFinanceContext {
  casinuFinance: CasinuFinance;
}

export const Context = createContext<CasinuFinanceContext>({ casinuFinance: new CasinuFinance(config) });

export const CasinuFinanceProvider: React.FC<Props> = ({ children }) => {
  // @ts-ignore
  const ethereum = window.ethereum;

  const [account, setAccount] = useState<string>("");
  const [casinuFinance, setCasinuFinance] = useState<CasinuFinance>(new CasinuFinance(config));

  ethereum.request({ method: "eth_requestAccounts"}).then((address:string[]) =>{
    setAccount(address[0])
  } )

  useEffect(() => {
    if (!casinuFinance) {
      const casinu = new CasinuFinance(config);
      if (account) {
        // wallet was unlocked at initialization
        casinu.unlockWallet(ethereum, account);
      }
      setCasinuFinance(casinu);
    } else if (account) {
 
      casinuFinance.unlockWallet(ethereum, account);
    }
  }, [account, casinuFinance]);

  return <Context.Provider value={{ casinuFinance }}>{children}</Context.Provider>;
};
