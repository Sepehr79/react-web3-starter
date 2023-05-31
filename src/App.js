import { MetaMaskSDK } from '@metamask/sdk'
import Web3 from "web3";
import { useState } from 'react';
import './App.css'

const options = {
  injectProvider: false,
  communicationLayerPreference: 'webrtc',
};
const sdk = new MetaMaskSDK(options);
const provider = sdk.getProvider()
let web3js = new Web3(provider)
const contractABI = require('./Storage.json').abi
const contractAddress = '{CONTRACT_ADDRESS}'


function App() {
  const [account, setAccount] = useState('')

  if (provider.isMetaMask) {
    window.ethereum.enable()
    web3js.eth.getAccounts()
    .then(accounts => { setAccount(accounts[0]) })
  

    window.ethereum.on('accountsChanged', function (accounts) {
      setAccount(accounts[0])
    })
 
    // Use this variable to call contracts functions
    let contractInstance = new web3js.eth.Contract(contractABI, contractAddress)

    return (
      <>
        Metamask wallet is installed { account }
      </>
    );
  } 
  return (
    <>
      Please install metamask wallet
    </>
  )
  
}

export default App;