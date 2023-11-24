import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const optimizerSettings = {
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
    outputSelection: {
      "*": {
        "*": ["devdoc", "userdoc", "metadata"],
        "": [],
      },
    },
  },
}

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: "xzo",
  networks: {
    local: {
      url: "http://evm.exzo.network",
      accounts: [
        "0x99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342",
        "0xE2033D436CE0614ACC1EE15BD20428B066013F827A15CC78B063F83AC0BAAE64",
      ],
    },
    xzo: {
      url: "https://evm.exzo.network",
      chainId: 1229,
      gas: 45000000, // Gas limit
      gasPrice: 20000000000, // 20 Gwei in wei
      // Add accounts if you are going to deploy contracts
      // accounts: [`0x${your_private_key}`]
    },
  },
};

export default config;
