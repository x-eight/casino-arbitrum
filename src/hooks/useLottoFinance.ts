import { useContext } from "react";
import { Context } from "../lotto-provider";

const useLottoFinance = () => {
  const { lottoFinance } = useContext(Context);
  return lottoFinance;
};

export default useLottoFinance;
