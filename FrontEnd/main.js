let web3;
let tokenContract;
let userAccount;

// Contract ABI and address
const contractABI = [
    {
        "constant": true,
        "inputs": [{"name": "account", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {"name": "recipient", "type": "address"},
            {"name": "amount", "type": "uint256"}
        ],
        "name": "transfer",
        "outputs": [{"name": "", "type": "bool"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';  // Deployed contract address

// Initialize Web3
async function initializeWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        tokenContract = new web3.eth.Contract(contractABI, contractAddress);
        userAccount = (await web3.eth.getAccounts())[0];
        document.getElementById('walletAddress').textContent = `Connected: ${userAccount}`;
    } else {
        alert("MetaMask is not installed. Please install it to interact with this DApp.");
    }
}

// Connect wallet (MetaMask)
async function connectWallet() {
    await initializeWeb3();
}

// Get token balance
async function getBalance() {
    const balance = await tokenContract.methods.balanceOf(userAccount).call();
    document.getElementById('balance').textContent = `Balance: ${balance}`;
}

// Transfer tokens
async function transferTokens() {
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;
    try {
        await tokenContract.methods.transfer(recipient, web3.utils.toWei(amount, 'ether')).send({ from: userAccount });
        document.getElementById('transactionStatus').textContent = "Transfer Successful!";
    } catch (error) {
        document.getElementById('transactionStatus').textContent = `Error: ${error.message}`;
    }
}
