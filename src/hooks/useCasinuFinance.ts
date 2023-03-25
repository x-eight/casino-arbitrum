import { useContext } from "react";
import { Context } from "../casinu-provider";

const useCasinuFinance = () => {
  return useContext(Context);
};

export default useCasinuFinance;
