![Exzo Network Smart Contract Guide](https://raw.githubusercontent.com/Exzo-Network/Exzo-Network-Branding-Assets/main/index.png)

## Introduction

Exzo Network is an open-source platform for launching decentralized applications and enterprise blockchain deployments in one interoperable, highly scalable ecosystem. Exzo Network gives you complete control on both the network and application layers&mdash;helping you build anything you can imagine.

The Exzo Network Network is composed of many blockchains. One of these blockchains is the C-Chain (Contract Chain), which is an Ethereum Virtual Machine instance. The C-Chain's API is almost identical to an Ethereum node's API. Exzo Network offers the same interface as Ethereum but with higher speed, higher throughput, lower fees and lower transaction confirmation times. These properties considerably improve the performance of DApps and the user experience of smart contracts.

The goal of this guide is to lay out best practices regarding writing, testing and deployment of smart contracts to Exzo Network's C-Chain. We'll be building smart contracts with development environment [Hardhat](https://hardhat.org).

## Prerequisites

### NodeJS and Yarn

First, install the LTS (long-term support) version of [nodejs](https://nodejs.org/en). This is `14.17.0` at the time of writing. NodeJS bundles `npm`.

Next, install [yarn](https://yarnpkg.com):

```zsh
npm install -g yarn
```

### Exzo Network

[Exzo Network](https://github.com/Exzo-Network/Exzo-Network-Blockchain) is an Exzo Network node implementation written in Rust.

### Solidity and Exzo Network

It is also helpful to have a basic understanding of [Solidity](https://docs.soliditylang.org) and [Exzo Network](https://docs.exzo.network).

## Dependencies

Clone the [quickstart repository](https://github.com/ava-labs/avalanche-smart-contract-quickstart) and install the necessary packages via `yarn`.

```zsh
$ git clone https://github.com/Exzo-Network/Smart-Contract-Quickstart.git
$ cd smart-contract-quickstart
$ yarn
```

## Write Contracts

Edit the `Coin.sol` contract in `contracts/`. `Coin.sol` is an [Open Zeppelin](https://openzeppelin.com) [ERC20](https://eips.ethereum.org/EIPS/eip-20) contract. ERC20 is a popular smart contract interface. You can also add your own contracts.

## Hardhat Config

Hardhat uses `hardhat.config.js` as the configuration file. You can define tasks, networks, compilers and more in that file. For more information see [here](https://hardhat.org/config/).

In our repository we use a pre-configured file [hardhat.config.ts](https://github.com/Exzo-Network/Smart-Contract-Quickstart/blob/main/hardhat.config.ts). This file configures necessary network information to provide smooth interaction with Exzo Network. There are also some pre-defined private keys for testing on a local test network.

## Hardhat Tasks

You can define custom hardhat tasks in [hardhat.config.ts](https://github.com/Exzo-Network/Smart-Contract-Quickstart/blob/main/hardhat.config.ts).

## Documentation

https://docs.exzo.network


## Troubleshoot

If you get a Gas Error please update the following parameters:

Gas limit: 4500000000
Gas fee: 10
