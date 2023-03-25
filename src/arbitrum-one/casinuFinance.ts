import { Configuration } from "./config";
import { BigNumber, Contract, ethers } from "ethers";
import ERC20 from "./ERC20";
import { getDefaultProvider } from "../metamask/web3";
import { getPriceCoingecko } from "../service/api";

export class CasinuFinance {
  provider: ethers.providers.Web3Provider;
  signer?: ethers.Signer;
  config: Configuration;
  contracts: { [name: string]: Contract };
  externalTokens: { [name: string]: ERC20 };

  CASINU: ERC20;
  WETH: ERC20;
  USDC: ERC20;

  constructor(cfg: Configuration) {
    const { deployments, externalTokens } = cfg;
    const provider = getDefaultProvider();
    // loads contracts from deployments
    this.contracts = {};
    for (const [name, deployment] of Object.entries(deployments)) {
      this.contracts[name] = new Contract(
        deployment.address,
        deployment.abi,
        provider
      );
    }

    this.externalTokens = {};
    for (const [symbol, [address, decimal]] of Object.entries(externalTokens)) {
      this.externalTokens[symbol] = new ERC20(
        address,
        provider,
        symbol,
        decimal
      );
    }
    this.CASINU = new ERC20(deployments.CASINU.address, provider, "CASINU");
    this.WETH = new ERC20(deployments.WETH.address, provider, "WETH");
    this.USDC = this.externalTokens["USDC"];
    //console.log("this.WETH.displayedBalanceOf",this.WETH.displayedBalanceOf())
    this.config = cfg;
    this.provider = provider;
  }

  unlockWallet(provider: any) {
    const newProvider = new ethers.providers.Web3Provider(
      provider,
      this.config.chainId
    );

    this.signer = newProvider.getSigner(0);
    for (const [name, contract] of Object.entries(this.contracts)) {
      this.contracts[name] = contract.connect(this.signer);
    }
    const tokens = [
      this.CASINU,
      this.WETH,
      ...Object.values(this.externalTokens),
    ];
    for (const token of tokens) {
      token.connect(this.signer);
    }
  }

  async getEthBalance(account: string): Promise<number> {
    if (account.length !== 42) return 0;
    // @ts-ignore
    const balanceReq = await window.ethereum.request({
      method: "eth_getBalance",
      params: [account, "latest"],
    });

    const balance = +ethers.utils.formatEther(balanceReq);
    return balance;
  }

  async getPriceOfDollar(token: string): Promise<number> {
    return await getPriceCoingecko(token);
  }
}
