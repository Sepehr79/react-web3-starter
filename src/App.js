import './App.css';
import { MetaMaskSDK } from '@metamask/sdk'
import Web3 from "web3";

const options = {
  injectProvider: false,
  communicationLayerPreference: 'webrtc',
};
const sdk = new MetaMaskSDK(options);
const provider = sdk.getProvider()

function App() {
  if (provider.isMetaMask) {
    let web3js = new Web3(provider)
    // let contractInstance = new web3js.eth.Contract('CONTRACT_ABI', 'CONTRACT_ADDRESS')
    return (
      <div className="App">
        <h1>Metamask is installed</h1>
      </div>
    );
  } else {
    return (
        <h1>Please install metamask wallet</h1>
    )
  }
}

export default App;
