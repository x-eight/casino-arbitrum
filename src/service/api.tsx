import axios from "axios";
import { players_0,players_20 } from "./test";

const urlWithProxy = "https://dapp.lottoarbitrum.com/api";
//const urlWithProxy = "http://localhost:3000/v1";

axios.defaults.withCredentials = true;

interface JackpotstatResponse {
  totalJackpot: number;
  totalPlayers: number;
  totalWinners: number;
}

export async function getJackpotstats(): Promise<JackpotstatResponse> {
  try {
    const url = `${urlWithProxy}/jackpotstats`;
    //const response = await axios.get(url);

    //console.log("response", response);
    //console.log(i++)
    return {
      totalJackpot: 337849.84,
      totalPlayers: 5691,
      totalWinners: 107,
    };
  } catch (err:any) {
    throw new Error(err.message);
  }
}

interface PlayersResponse {
  address: string;
  buyamountusd: number;
  buyhash: string;
  chance: number;
  didwin: boolean;
  jackpotbalance: number;
  prizehash: string;
  timestamp: number;
}

export async function getRecentplayers(
  limit: number,
  skip: number
): Promise<PlayersResponse[]> {
  try {
    const url = `${urlWithProxy}/recentplayers/?limit=${limit}&skip=${skip}`;

    let data = players_0.players;
    if (skip===0) {
      data = players_0.players;
    }else if(skip===20){
      data = players_20.players;
    }else {
      data = new Array<any>();
    }
    

    return data.map((p) => {
      return {
        address: p.address,
        buyamountusd: p.buyamountusd,
        buyhash: p.buyhash,
        chance: p.chance,
        didwin: p.didwin,
        jackpotbalance: p.jackpotbalance,
        prizehash: p.prizehash,
        timestamp: p.timestamp,
      };
    });
  } catch (err:any) {
    throw new Error(err.message);
  }
}

export async function getRecentwinnings(
  limit: number,
  skip: number
): Promise<PlayersResponse[]> {
  try {
    const url = `${urlWithProxy}/recentwinnings/?limit=${limit}&skip=${skip}`;

    let data = players_0.players;
    if (skip===0) {
      data = players_0.players;
    }else if(skip===20){
      data = players_20.players;
    }else {
      data = new Array<any>();
    }

    return data.map((p) => {
      return {
        address: p.address,
        buyamountusd: p.buyamountusd,
        buyhash: p.buyhash,
        chance: p.chance,
        didwin: p.didwin,
        jackpotbalance: p.jackpotbalance,
        prizehash: p.prizehash,
        timestamp: p.timestamp,
      };
    });
  } catch (err:any) {
    throw new Error(err.message);
  }
}
