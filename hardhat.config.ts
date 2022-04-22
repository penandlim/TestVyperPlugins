import "@nomiclabs/hardhat-vyper"
import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-web3"
import "@typechain/hardhat"

import { HardhatUserConfig } from "hardhat/config"
import { ethers } from "ethers"

let config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
  },
  paths: {
    sources: "./contracts",
    artifacts: "./build/artifacts",
    cache: "./build/cache",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
          },
        },
      },
    ],
  },
  vyper: {
    compilers: [
      { version: "0.3.1" },
    ],
  },
  typechain: {
    outDir: "./build/typechain/",
    target: "ethers-v5",
  },
  mocha: {
    timeout: 200000,
  },
}

export default config
