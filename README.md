# Title

METAil NFT MarketPlace

# Description

METAil is a decentralized digital Ecommerce platform, a retail hub for Metaverse, offering NFTs like exclusive collections and wearables. It also features NFT creation and buying services, with new campaigning and marketing strategies for creators and brands. METAil is the perfect platform to explore the exciting world of Metaverse.


# Link

This is a marketplace for NFTs where users can purchase, sell, and create NFTs. It is a decentralised app built on the Ethereum blockchain.

Github Link: https://github.com/ravencode/Metail-NFT

Production Link: https://metail-nft.vercel.app/

Presentation Link: https://www.canva.com/design/DAFiEvbhwiA/F3z1274mgDvNKZTII2FIaQ/edit?utm_content=DAFiEvbhwiA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

Report Link: https://drive.google.com/file/d/1XP8ie4ONhlBx2XadQ_6rG9m6cOrfiFHN/view?usp=drivesdk


# How to Install and Run the Project

**Clone the repository**

```javascript
git clone https://github.com/ravencode/Metail-NFT
```

**cd into the Client Folder**

```bash
cd Metail-NFT
```

**Install the dependencies**

```javascript
npm install
```

**Start Hardhat node**

```javascript
npx hardhat node
```

**Run the deploy Script**

```javascript
npx hardhat run --network localhost ./scripts/deploy.js
```

**Run the seed Script**

```javascript
npx hardhat run --network localhost ./scripts/seed-nfts.js
```

**Start the development server**

```javascript
npm run dev
```

**Port to Run the Website**

```
http://localhost:3000
```

## Metamask Setup

- Ensure you are using the `Mumbai Test Network` on your `metamask wallet`.

### Polygon Mumbai Network Setup

1. Open metamask and add network.
2. Network name `Polygon Mumbai Testnet`
3. New RPC URL `https://rpc-mumbai.maticvigil.com/`
4. Chain ID `80001`
5. Currency symbol `MATIC`

### Localhost Network Setup

1. Open metamask and add network.
2. Network name `Localhost`
3. New RPC URL `http://127.0.0.1:8545`
4. Chain ID `31337`
5. Currency symbol `ETH`

# The Contract

The smart contract was deployed at:

https://mumbai.polygonscan.com/address/0xe288B549Dc086597D7dBCfb9b0B832cF2900C4bF

With this address:

```
0xe288B549Dc086597D7dBCfb9b0B832cF2900C4bF
```

On the `MUMBAI TESTNET`.

## Structs

`MarketItem`: This stores information about the market items, including the tokenId, seller, owner, price and sold value.

## Mapping

`idToMarketItem`: This mapping stores all the MarketItem using their tokenId as the key.

## Variables

`_tokenIds`: Stores the market Item Id

`_itemsSold`: Stores the number of Sold item in the Market

`listingPrice`: This variable stores the listing Price.

`owner`: stores the owner adress.

## Functions

`updateListingPrice`: Updates the listing price of the contract .

`getListingPrice`: Returns the listing price of the contract.

`createMarketItemToken`: Mints a token and lists it in the marketplace.

`resellToken`: Allows someone to resell a token they have purchased.

`createMarketSale`: Creates the sale of a marketplace item and transfers ownership of the item, as well as funds between parties.

`fetchMarketItems`: Returns all unsold market items .

`fetchMyNFTs`: Returns only items that a user has purchased .

`fetchItemsListed`: Returns only items a user has listed.

## Modifiers

`onlyOwner`: The modifier indicates only owner of the marketplace can change the listing price

## Events

`MarketItemCreated`: it stores the market item passed in transaction logs when emitted.
`MarketItemSold`: it stores the market item that has been sold passed in transaction logs when emitted.
` MarketItemResold`: it stores the market item that has been resold passed in transaction logs when emitted.
`MarketItemCreated`: it stores the market item that has been created passed in transaction logs when emitted.

## Dependencies

- `@openzeppelin/contracts`: A library of modular, reusable, secure smart contracts for the Ethereum network, written in Solidity.

- `axios`: A simple promise based HTTP client for the browser and node.js.

- `dotenv`: A zero-dependency module that loads environment variables from a .env file into process.env.

- `ether`: A compact JavaScript library with full functionality for interacting with the Ethereum blockchain.

- `http-proxy-middleware`: It stands between the sender and the recipient and can also modify an incoming request before it's eventual handler receives it.

- `ipfs-http-client`: A JavaScript client for talking to a js-ipfs node.

- `next`: it's a flexible React framework that gives you building blocks to create fast web applications.

- `react`: it implement a render() method that takes input data and returns what to display

- `react-dom`: it provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page

- `react-dropzone`: It's an HTML5-compliant React component for handling the dragging and dropping of files.

- `react-icons`: It helps you add icons (from all different icon libraries) to your React apps. It delivers the icons to your app as components so they're easier to work with, and it lets you style them so they're consistent with the overall style of your app.

- `web3modal`: It's an easy-to-use library to help developers add support for multiple providers in their apps with a simple customizable configuration.

## Dev Dependencies

- `@nomicfoundation/hardhat-toolbox`: It bundles all the commonly used packages and Hardhat plugins for development in Hardhat.
- `hardhat`: A development environment that helps in testing, compiling, deploying, and debugging dApps on the Ethereum blockchain.

# License

This project is licensed under Grandida License - see the LICENSE.md file for details.
