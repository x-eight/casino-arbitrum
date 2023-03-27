import React from "react";
import { Image } from "@chakra-ui/react";
import ethereumPNG from "../../assets/ethereum.png";
import ethereumSVG from "../../assets/ethereum.svg";
//import casinuPNG from "../../assets/casinu.png";
import wethPNG from "../../assets/weth.png";
import tokenPNG from "../../assets/token.png";

import competition from "../../assets/competition.svg";
import dashboard from "../../assets/dashboard.png";
import home from "../../assets/home.svg";
import nitro from "../../assets/nitro.svg";
import unbinder from "../../assets/unbinder.png";
import arbitrum from "../../assets/arbitrum.svg";

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  ETH: ethereumPNG,
  WETH: wethPNG,
  ETHSVG: ethereumSVG,
  CASINU: tokenPNG,
  //IMAGE
  //=====================
  ARBITRUM: arbitrum,
  TopPlayer: competition,
  Dashboard: dashboard,
  Home: home,
  "Nitro Pool": nitro,
  "LP unbinder": unbinder,
};

type LogoProps = {
  symbol: string;
  size?: string;
  width?: string;
};

const TokenSymbol: React.FC<LogoProps> = ({
  symbol,
  size = "10rem",
  width = undefined,
}) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
    return (
      <Image src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={width? width:size} height={size}/>
    );
};

export default TokenSymbol;
