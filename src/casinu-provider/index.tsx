import React, { createContext, useEffect, useState } from 'react';
import CasinuFinance from '../arbitrum-one';
import config from '../config';

type Props = {
  children: React.ReactNode;
};

export interface CasinuFinanceContext {
  casinuFinance: CasinuFinance;
  account: string;
  updateAccount: (account: string) => void
}

export const Context = createContext<CasinuFinanceContext>({ 
  casinuFinance: new CasinuFinance(config),
  account:"",
  updateAccount: (account: string) => {}
 });

export const CasinuFinanceProvider: React.FC<Props> = ({ children }) => {
  const [account, setAccount] = useState("");
  
  // @ts-ignore
  const ethereum = window.ethereum;
  const [casinuFinance, setCasinuFinance] = useState<CasinuFinance>(new CasinuFinance(config));

  useEffect(() => {
    if (!casinuFinance) {
      const casinu = new CasinuFinance(config);
      if (account) {
        // wallet was unlocked at initialization
        casinu.unlockWallet(ethereum);
      }
      setCasinuFinance(casinu);
    } else if (account) {
 
      casinuFinance.unlockWallet(ethereum);
    }
  }, [account, casinuFinance]);

  const updateAccount = (address:string) => {
    setAccount(address);
  }

  return <Context.Provider value={{ casinuFinance,account,updateAccount }}>{children}</Context.Provider>;
};
