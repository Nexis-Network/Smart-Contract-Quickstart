![Nexis Network Smart Contract Guide](https://raw.githubusercontent.com/Nexis-Network/Nexis-Network-Branding-Assets/main/index.png)

## Introduction

Nexis Network is an open-source platform for launching decentralized applications and enterprise blockchain deployments in one interoperable, highly scalable ecosystem. Nexis Network gives you complete control on both the network and application layers&mdash;helping you build anything you can imagine.

The Nexis Network Network is an EVM and Rust compatible blockchain. Nexis Network EVM allows for smart contract deployment, which uses an Ethereum Virtual Machine instance that enables these low cost fee's, high scalabiity, and fast transactions. The API is almost identical to an Ethereum node's API. Nexis Network offers the same interface as Ethereum but with higher speed, higher throughput, lower fees and lower transaction confirmation times. These properties considerably improve the performance of DApps and the user experience of smart contracts.

The goal of this guide is to lay out best practices regarding writing, testing and deployment of smart contracts to Nexis Network's C-Chain. We'll be building smart contracts with development environment [Hardhat](https://hardhat.org).

## Prerequisites

### NodeJS and Yarn

First, install the LTS (long-term support) version of [nodejs](https://nodejs.org/en). This is `14.17.0` at the time of writing. NodeJS bundles `npm`.

Next, install [yarn](https://yarnpkg.com):

```zsh
npm install -g yarn
```

### Nexis Network

[Nexis Network](https://github.com/Nexis-Network/Nexis-Network-Blockchain) is an Nexis Network node implementation written in Rust.

### Solidity and Nexis Network

It is also helpful to have a basic understanding of [Solidity](https://docs.soliditylang.org) and [Nexis Network](https://docs.Nexis.network).

## Dependencies

Clone the [quickstart repository](https://github.com/ava-labs/avalanche-smart-contract-quickstart) and install the necessary packages via `yarn`.

```zsh
$ git clone https://github.com/Nexis-Network/Smart-Contract-Quickstart.git
$ cd smart-contract-quickstart
$ yarn
```

## Write Contracts

Edit the `Coin.sol` contract in `contracts/`. `Coin.sol` is an [Open Zeppelin](https://openzeppelin.com) [ERC20](https://eips.ethereum.org/EIPS/eip-20) contract. ERC20 is a popular smart contract interface. You can also add your own contracts.

## Hardhat Config

Hardhat uses `hardhat.config.js` as the configuration file. You can define tasks, networks, compilers and more in that file. For more information see [here](https://hardhat.org/config/).

In our repository we use a pre-configured file [hardhat.config.ts](https://github.com/Nexis-Network/Smart-Contract-Quickstart/blob/main/hardhat.config.ts). This file configures necessary network information to provide smooth interaction with Nexis Network. There are also some pre-defined private keys for testing on a local test network.

## Hardhat Tasks

You can define custom hardhat tasks in [hardhat.config.ts](https://github.com/Nexis-Network/Smart-Contract-Quickstart/blob/main/hardhat.config.ts).

## Documentation

https://docs.Nexis.network


## Troubleshoot

If you get a Gas Error please update the following parameters:

Gas limit: 4500000000
Gas fee: 10
