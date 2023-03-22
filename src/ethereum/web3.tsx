import Web3 from "web3";
import { ethers } from "ethers";

interface wallet {
    address:string,
    balance:number
}

const isMetamaskInstalled = () => {
    // @ts-ignore
    const { ethereum } = window;
    return  Boolean(ethereum && ethereum.isMetaMask)
}

export const initialize = () => {
    if(isMetamaskInstalled()){
        // @ts-ignore
        window.web3 = new Web3(window.ethereum);
        console.log("Metamask is installed")
    } else {
        alert("Metamask is not installed")
    }
}

export async function connectWallet(): Promise<wallet[] | undefined> {
    try {
        // @ts-ignore
        const addresses:string[] = await window.ethereum.request({ method: "eth_requestAccounts"});
        const wallets = await Promise.all(addresses.map(async (address:string):Promise<wallet> => {
            // @ts-ignore
            const balanceReq = await window.ethereum.request({
                method: "eth_getBalance",
                params: [address, "latest"],
            });
            const balance = +ethers.utils.formatEther(balanceReq);

            return { address, balance }
        }))

        return wallets
    } catch (e:any) {
        if(e.code === 4001) {
            alert("Error connecting.")
        } else {
            alert(e.message)
        }
    }
}