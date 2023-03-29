import axios from "axios";
import { tops } from "./test";

const urlWithProxy = "https://casinu-api-production.up.railway.app";
interface JackpotstatResponse {
  totalJackpot: number;
  totalPlayers: number;
  totalWinners: number;
}

export async function getJackpotstats(): Promise<JackpotstatResponse> {
  try {
    const response = await axios.get(`${urlWithProxy}/tickets/stats`);

    return {
      totalJackpot: +response.data.jackpotDistributed,
      totalPlayers: +response.data.players,
      totalWinners: +response.data.winners,
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
  skip: number,
  limit = 6
): Promise<{hasMore:boolean, total:number, data:PlayersResponse[]}> {
  try {
    const response = await axios.get(`${urlWithProxy}/tickets?limit=${limit}&skip=${skip}`);

    const data = response.data.tickets.map((p:any) => {
      const dateObj = new Date(p.timestamp*1000); 
      const dateString = dateObj.toLocaleDateString("en-US");
      const timeString = dateObj.toLocaleTimeString("en-US", { hour12: true, hour: "numeric", minute: "numeric" });

      return {
        address: p.player_address,
        chance: p.odds,
        tx: p.buy_tx_hash,
        avatar: "",
        value: p.prize_amount,
        created_at: `${dateString} ${timeString}`,
      };
    });
    
    let test = true
    if(skip >7 || data.length<3){
      test = false
    }

    return { hasMore:test, total:response.data.total, data }
  } catch (err:any) {
    throw new Error(err.message);
  }
}

export async function getRecentwinnings(
  skip: number,
  limit = 6
  ): Promise<{hasMore:boolean, total:number, data:PlayersResponse[]}> {
  try {
    const response = await axios.get(`${urlWithProxy}/tickets/winners?limit=${limit}&skip=${skip}`);

    const data = response.data.tickets.map((p:any) => {
      const dateObj = new Date(p.timestamp*1000);
      const dateString = dateObj.toLocaleDateString("en-US");
      const timeString = dateObj.toLocaleTimeString("en-US", { hour12: true, hour: "numeric", minute: "numeric" });
      return {
        address: p.player_address,
        chance: p.odds,
        tx: p.buy_tx_hash,
        avatar: "",
        value: p.prize_amount,
        created_at: `${dateString} ${timeString}`,
      };
    });

    let test = true
    if(skip >7 || data.length<3){
      test = false
    }

    return { hasMore:test, total:response.data.total, data }
  } catch (err:any) {
    throw new Error(err.message);
  }
}

//===========================================================//
export async function getMyTickets(
  address:string,
  skip: number,
  limit = 6
  ): Promise<{hasMore:boolean, total:number, data:PlayersResponse[]}> {
    try {
    const response = await axios.get(`${urlWithProxy}/tickets/${address}?limit=${limit}&skip=${skip}`);

    const data = response.data.tickets.map((p:any) => {
      const dateObj = new Date(p.timestamp*1000);
      const dateString = dateObj.toLocaleDateString("en-US");
      const timeString = dateObj.toLocaleTimeString("en-US", { hour12: true, hour: "numeric", minute: "numeric" });
      return {
        address: p.player_address,
        chance: p.odds,
        tx: p.buy_tx_hash,
        avatar: "",
        value: p.prize_amount ?? 0,
        created_at: `${dateString} ${timeString}`,
      };
    });

    let test = true
    if(skip >7 || data.length<3){
      test = false
    }

    return { hasMore:test, total:response.data.total, data }
  } catch (err:any) {
    throw new Error(err.message);
  }
}

//=======================================================//

interface TopsResponse {
  address: string;
  amount: number;
}

export async function getTopplayers(
  skip: number
): Promise<TopsResponse[]> {
  try {
    //const url = `${urlWithProxy}/topplayers/?limit=20&skip=${skip}`;
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


export async function getPriceCoingecko(token:string): Promise<number> {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=USD`);

    if(!response.data[token]?.usd)return 0.1
    return response.data[token]?.usd
  } catch (err:any) {
    console.log("error :",err.message)
    return 0.1
  }
}

