import { Configuration } from "./arbitrum-one/config";

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: 42161,
    networkName: "Arbitrum One",
    ftmscanUrl: "https://arbiscan.io",
    defaultProvider:
      "https://arb-mainnet.g.alchemy.com/v2/CZTZiGD6wtwwVUbmEcPc-l8YQWQSNeXf",
    deployments: require("./arbitrum-one/deployments/deployments.testing.json"),
    externalTokens: {
      USDC: ["0x8F3f5b275184aC52B4f6157f1f3833Dc120cfB3D", 6],
      "CASINU-WETH LP": ["0x4F88BC837199e7E04b5f6071DFf0d019b957238d", 18], //DUKE-USDC-LP
    },
    baseLaunchDate: new Date("2021-06-02 13:00:00Z"),
    bondLaunchesAt: new Date("2020-12-03T15:00:00Z"),
    masonryLaunchesAt: new Date("2020-12-11T00:00:00Z"),
    refreshInterval: 10000,
  },
  production: {
    chainId: 42161,
    networkName: "Arbitrum One",
    ftmscanUrl: "https://arbiscan.io",
    defaultProvider:
      "https://arb-mainnet.g.alchemy.com/v2/CZTZiGD6wtwwVUbmEcPc-l8YQWQSNeXf",
    deployments: require("./arbitrum-one/deployments/deployments.testing.json"),
    externalTokens: {
      USDC: ["0x8F3f5b275184aC52B4f6157f1f3833Dc120cfB3D", 6],
      "CASINU-WETH LP": ["0x4F88BC837199e7E04b5f6071DFf0d019b957238d", 18], //DUKE-USDC-LP
    },
    baseLaunchDate: new Date("2021-06-02 13:00:00Z"),
    bondLaunchesAt: new Date("2020-12-03T15:00:00Z"),
    masonryLaunchesAt: new Date("2020-12-11T00:00:00Z"),
    refreshInterval: 10000,
  },
};

export default configurations[process.env.NODE_ENV || "development"];
