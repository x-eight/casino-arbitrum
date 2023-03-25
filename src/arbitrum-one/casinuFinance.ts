import { Configuration } from "./config";
import { BigNumber, Contract, ethers } from "ethers";
import ERC20 from "./ERC20";
import config from "../config";
import { getDefaultProvider } from "../metamask/web3";
import { getPriceCoingecko } from "../service/api";

export class CasinuFinance {
  myAccount: string;
  provider: ethers.providers.Web3Provider;
  signer?: ethers.Signer;
  config: Configuration;
  contracts: { [name: string]: Contract };
  externalTokens: { [name: string]: ERC20 };

  CASINU: ERC20;
  WETH: ERC20;
  USDC: ERC20;

  constructor(cfg: Configuration) {
    this.myAccount = "";
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

  unlockWallet(provider: any, account: string) {
    const newProvider = new ethers.providers.Web3Provider(
      provider,
      this.config.chainId
    );

    this.signer = newProvider.getSigner(0);
    this.myAccount = account;
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

  get isUnlocked(): boolean {
    return !!this.myAccount;
  }

  async getEthBalance(): Promise<number> {
    if (this.myAccount.length !== 42) return 0;
    // @ts-ignore
    const balanceReq = await window.ethereum.request({
      method: "eth_getBalance",
      params: [this.myAccount, "latest"],
    });

    const balance = +ethers.utils.formatEther(balanceReq);
    return balance;
  }

  async getPriceOfDollar(token: string): Promise<number> {
    return await getPriceCoingecko(token);
  }

  async watchAssetInMetamask(assetName: string): Promise<boolean> {
    const { ethereum } = window as any;
    if (ethereum && ethereum.networkVersion === config.chainId.toString()) {
      let asset;
      let assetUrl;
      if (assetName === "DUKE") {
        asset = this.CASINU;
        assetUrl = "https://duke-finance.s3.amazonaws.com/token/DUKE.png";
      } else if (assetName === "DSHARE") {
        asset = this.WETH;
        assetUrl = "https://duke-finance.s3.amazonaws.com/token/DSHARE.png";
      }
      await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: asset?.address,
            symbol: asset?.symbol,
            decimals: 18,
            image: assetUrl,
          },
        },
      });
    }
    return true;
  }
}
