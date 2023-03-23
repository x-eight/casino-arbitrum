import Web3 from "web3";
import { ethers } from "ethers";

interface wallet {
  address: string;
  balance: number;
}

const isMetamaskInstalled = () => {
  // @ts-ignore
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};

export const initialize = () => {
  if (isMetamaskInstalled()) {
    // @ts-ignore
    window.web3 = new Web3(window.ethereum);
    console.log("Metamask is installed");
  } else {
    alert("Metamask is not installed");
  }
};

export async function connectWallet(): Promise<wallet | undefined> {
  try {
    // @ts-ignore
    const provider = window.ethereum;

    // @ts-ignore
    const addresses: string[] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const web3 = new Web3(provider);
    //const accounts = await web3.eth.requestAccounts();
    const networkId = await web3.eth.net.getId();
    if (networkId !== 42161) {
      const rpcUrl = "https://arb-mainnet.g.alchemy.com/v2/CZTZiGD6wtwwVUbmEcPc-l8YQWQSNeXf";
      // @ts-ignore
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0xA4B1",
            chainName: "Arbitrum One",
            nativeCurrency: {
              name: "Ethereum",
              symbol: "ETH",
              decimals: 18,
            },
            rpcUrls: [rpcUrl],
            blockExplorerUrls: ["https://arbiscan.io/"],
          },
        ],
      });
    }

    if (addresses && addresses.length > 0) {
      // @ts-ignore
      const balanceReq = await window.ethereum.request({
        method: "eth_getBalance",
        params: [addresses[0], "latest"],
      });
      console.log("balanceReq :", balanceReq);

      const balance = +ethers.utils.formatEther(balanceReq);

      return { address: addresses[0], balance };
    }
  } catch (e:any) {
    if (e.code === 4001) {
      alert("Error connecting.");
    } else {
      alert(e.message);
    }
  }
}
