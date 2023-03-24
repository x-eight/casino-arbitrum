import axios from "axios";
import { players_0, players_20, tops } from "./test";

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
  created_at: string;
  avatar: string;
  chance: number;
  tx: string;
  value?: number;
}

export async function getRecentplayers(
  skip: number
): Promise<PlayersResponse[]> {
  try {
    const url = `${urlWithProxy}/recentplayers/?limit=20&skip=${skip}`;
    console.log("skip",skip)
    let data = players_0.players;
    if (skip === 0) {
      data = players_0.players;
    } else if (skip === 20) {
      data = players_20.players;
    } else {
      data = new Array<any>();
    }

    return data.map((p) => {
      const dateObj = new Date(p.timestamp*1000); // crear objeto de fecha
      const dateString = dateObj.toLocaleDateString("en-US");
      const timeString = dateObj.toLocaleTimeString("en-US", { hour12: true, hour: "numeric", minute: "numeric" });

      return {
        address: p.address,
        chance: p.chance,
        tx: p.buyhash,
        avatar: "",
        created_at: `${dateString} ${timeString}`,
      };
    });
  } catch (err:any) {
    throw new Error(err.message);
  }
}

export async function getRecentwinnings(
  skip: number
): Promise<PlayersResponse[]> {
  try {
    const url = `${urlWithProxy}/recentwinnings/?limit=20&skip=${skip}`;

    let data = players_0.players;
    if (skip === 0) {
      data = players_0.players;
    } else if (skip === 20) {
      data = players_20.players;
    } else {
      data = new Array<any>();
    }

    return data.map((p) => {
      const dateObj = new Date(p.timestamp*1000);
      const dateString = dateObj.toLocaleDateString("en-US");
      const timeString = dateObj.toLocaleTimeString("en-US", { hour12: true, hour: "numeric", minute: "numeric" });
      return {
        address: p.address,
        chance: p.chance,
        tx: p.buyhash,
        avatar: "",
        value: p.jackpotbalance,
        created_at: `${dateString} ${timeString}`,
      };
    });
  } catch (err:any) {
    throw new Error(err.message);
  }
}

interface TopsResponse {
  address: string;
  amount: number;
}

export async function getTopplayers(
  skip: number
): Promise<TopsResponse[]> {
  try {
    const url = `${urlWithProxy}/topplayers/?limit=20&skip=${skip}`;
    const data = tops 

    return data.map((p) => {
      return {
        address: p._id,
        amount: p.buys,
      };
    });
  } catch (err:any) {
    throw new Error(err.message);
  }
}
