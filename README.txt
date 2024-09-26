ERC-20 Token DApp

This project is a simple decentralized application (DApp) that interacts with an ERC-20 token contract deployed on a local blockchain using Hardhat. The DApp allows users to view their token balance and transfer tokens to other accounts via a simple frontend.

Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v12 or later)
- npm (Node Package Manager)
- MetaMask browser extension
- Python (to serve the frontend locally)

Project Setup

1. Install Dependencies

Navigate to the root folder of the project and initialize the project with the following commands:

npm init -y
npm install --save-dev hardhat
npm install web3

2. Set Up Hardhat Project

To set up a Hardhat environment, follow these steps:

	1. Initialize a new Hardhat project:
   	npx hardhat

	2. Install OpenZeppelin contracts (for ERC-20 token creation):
   	npm install @openzeppelin/contracts

3. Write your smart contracts inside the `contracts/` directory (e.g., `Token.sol`).

	3. Compile the Contracts
	Once your contracts are written, compile them using Hardhat:
	npx hardhat compile


4. Start the Local Blockchain Node

To run a local blockchain network with Hardhat, use the following command:
npx hardhat node

The blockchain will run at http://127.0.0.1:8545 with several test accounts.

5. Deploy the Contracts

Deploy the ERC-20 token contract to the local blockchain with the following command:
npx hardhat run scripts/deploy.js --network localhost

After deployment, the terminal will display the address where the token contract was deployed (e.g., `0x5FbDB2315678afecb367f032d93F642f64180aa3`).

6. Configure MetaMask

	1. Open MetaMask and add a custom network:
  	 - Network Name: Localhost 8545
  	 - New RPC URL: http://127.0.0.1:8545
  	 - Chain ID: 31337
   
2. Import a test account from Hardhat:
   - In the terminal, Hardhat will display private keys for several test accounts. Copy one of these keys and import it into MetaMask.

7. Serve the Frontend

To serve the frontend (index.html, style.css, and main.js) locally, navigate to your frontend directory and use the following command: python -m http.server

This will start a local server at http://localhost:8000. Open this URL in your browser.

8. Interact with the DApp

1. Connect Wallet: Click the Connect Wallet button to connect MetaMask.
2. Get Balance: Click the Get Balance button to check your ERC-20 token balance.
3. Transfer Tokens: Use the form to transfer tokens to another address and click Transfer Tokens.

9. Common Commands Recap

- Compile contracts:
  npx hardhat compile

- Start Hardhat node:
  npx hardhat node

- Deploy contracts:
  npx hardhat run scripts/deploy.js --network localhost

- Serve frontend:
  python -m http.server
