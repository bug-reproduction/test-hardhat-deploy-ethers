require('hardhat-deploy');
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');

const config = {
  solidity: {
    compilers: [
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
          },
        },
      },
    ],
  },
  namedAccounts: {
    deployer: 0,
    simpleERC20Beneficiary: 1,
  },
  paths: {
    sources: 'src',
  },
};

module.exports = config;
