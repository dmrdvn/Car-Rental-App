# Decentralized Car Rental Platform on Binance Smart Chain Testnet!

## Overview
A decentralized car rental platform built on Binance Smart Chain would enable car owners to register their vehicles on the platform and rent them out to users in a trustless and decentralized manner. The platform would leverage smart contracts to automate the rental process, handle payments, and ensure the security of user data. Users would be able to search for available cars, select rental dates, and complete transactions through the platform. The decentralized nature of the platform would eliminate the need for intermediaries, reducing transaction costs and increasing transparency.

## Prerequisites
- Node.js
  - 10.x or later
- NPM version 
  - 5.2 or later
- Truffle Version
  - Truffle v5.8.1 (core: 5.8.1)
  - Solidity v0.8.7 (solc-js)
- Ganache-cli --version Ganache-cli v7.7.7

## Setup
```
# Clone the repository
$ https://github.com/SimonYuvarlak/CarRentalDapp.git
# Change the current directory
# Install ganache and truffle
$ npm install -g ganache-cli truffle@v4.1.14
# Install node modules
$ npm install
# Open a new terminal, run below command to test compile smart contract on Binance Smart Chain Testnet
$ npm run compile:bsc bscTestnet
# Run tests on Binance Smart Chain Testnet
$ npm run test:bsc bscTestnet
# To deploy on Binance Smart Chain Testnet
$ npm migrate:bsc bscTestnet
# To run the frontend cd into directory
$ cd dapp
# Install dependencies
$ npm install
# Run the server
$ npm run start
```

## Scripts for Binance Smart Chain Testnet
```
$ npm run compile:bsc
$ npm run test:bsc bscTestnet
$ npm run migrate:bsc bscTestnet
```

## Structure
```
.
├── build/
│   └── bsc-contracts/
│       └── RentalPlatform.json
├── contracts/
│   └── bsc/
│       └── RentalPlatform.sol
├── dapp/
│   ├── node_modules
│   ├── public
│   ├── src/
│   │   ├── ABI/
│   │   │   └── RentalPlatform.json
│   │   ├── assets/
│   │   │   ├── background.jpg
│   │   │   └── bg.jpg
│   │   ├── components/
│   │   │   ├── reusables/
│   │   │   │   ├── GradientButton.jsx
│   │   │   │   └── UserInput.jsx
│   │   │   ├── UI/
│   │   │   │   └── Modal.jsx
│   │   │   ├── AdminActions.jsx
│   │   │   ├── CarComponent.jsx
│   │   │   ├── CarDetailsModal.jsx
│   │   │   ├── DueComponent.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── InfoBox.jsx
│   │   │   ├── InputComponent.jsx
│   │   │   ├── Status.jsx
│   │   │   └── TopLabel.jsx
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── reportWebVital.js
│   │   ├── setupTests.js
│   │   └── Web3Client.js
│   ├── package-lock.json
│   ├── package.json
│   └── tailwind.config.js
├── migrations/
│   └── deploy_rental_platform.js
├── node_modules
├── test/
│   └── RentalPlatform.js
├── .env
├── box-img-lg.png
├── box-img-sm.png
├── package-lock.json
├── package.json
├── README.md
├── truffle-config.bsc.js
└── truffle-config.js
```

## How it Works
Checklist
```
npm install # intall dependencies
npm run compile:bsc bscTestnet # compile your contract
npm run test:bsc bscTestnet # run tests on Binance Smart Chain Testnet
MetaMask chrome addon installed
cd dapp # cd the directory of the frontend
npm install # install the dependencies
npm run start # start the development server
```

## How To
```
1. Open a browser and go to http://localhost:3000
2. If your metamask is installed, then the website will automatically ask you to connect to Binance Smart Chain Testnet
3. Enter your name and surname to register (your chosen address from metamask will be used to register your address)
4. Experiment!
```
