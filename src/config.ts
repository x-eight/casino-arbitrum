//import { ChainId } from '@spookyswap/sdk';
import { Configuration } from './arbitrum-one/config';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: 42161,//ChainId.MAINNET,
    networkName: 'Arbitrum One',
    ftmscanUrl: 'https://arbiscan.io',
    defaultProvider: 'https://arb-mainnet.g.alchemy.com/v2/CZTZiGD6wtwwVUbmEcPc-l8YQWQSNeXf',
    deployments: require('./tomb-finance/deployments/deployments.testing.json'),
    externalTokens: {
      WFTM: ['0xf1277d1ed8ad466beddf92ef448a132661956621', 18],
      USDC: ['0x8F3f5b275184aC52B4f6157f1f3833Dc120cfB3D', 6],
      'USDT-FTM-LP': ['0xE7e3461C2C03c18301F66Abc9dA1F385f45047bA', 18],
      'TOMB-FTM-LP': ['0x13Fe199F19c8F719652985488F150762A5E9c3A8', 18],
      'TSHARE-FTM-LP': ['0x20bc90bB41228cb9ab412036F80CE4Ef0cAf1BD5', 18],
      'DUKE-USDC-LP': ['0x4F88BC837199e7E04b5f6071DFf0d019b957238d', 18],
      'DSHARE-USDC-LP': ['0xe65AA55B47d165357b53546e3E5F831602d288CE', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: 42161,//ChainId.MAINNET,
    networkName: 'Arbitrum One',
    ftmscanUrl: 'https://arbiscan.io',
    defaultProvider: 'https://arb-mainnet.g.alchemy.com/v2/CZTZiGD6wtwwVUbmEcPc-l8YQWQSNeXf',
    deployments: require('./tomb-finance/deployments/deployments.testing.json'),
    externalTokens: {
      WFTM: ['0xf1277d1ed8ad466beddf92ef448a132661956621', 18],
      USDC: ['0x8F3f5b275184aC52B4f6157f1f3833Dc120cfB3D', 6],
      'USDT-FTM-LP': ['0xE7e3461C2C03c18301F66Abc9dA1F385f45047bA', 18],
      'TOMB-FTM-LP': ['0x13Fe199F19c8F719652985488F150762A5E9c3A8', 18],
      'TSHARE-FTM-LP': ['0x20bc90bB41228cb9ab412036F80CE4Ef0cAf1BD5', 18],
      'DUKE-USDC-LP': ['0x4F88BC837199e7E04b5f6071DFf0d019b957238d', 18],
      'DSHARE-USDC-LP': ['0xe65AA55B47d165357b53546e3E5F831602d288CE', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export default configurations[process.env.NODE_ENV || 'development'];
