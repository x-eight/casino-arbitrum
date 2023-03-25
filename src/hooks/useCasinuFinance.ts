import { useContext } from "react";
import { Context } from "../casinu-provider";

const useCasinuFinance = () => {
  const { casinuFinance } = useContext(Context);
  return casinuFinance;
};

export default useCasinuFinance;
