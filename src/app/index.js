import '../index.css';
import '../App.css';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from "ethers";
import React from "react";
import NetworkList from "./NetworkList";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <title>Mai network data</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css" />
        </header>
        <div className="flex pa4 w-100">
          <NetworkList />
        </div>
      </div>
  );
}

function getLibrary(provider, _) {
  return new ethers.providers.Web3Provider(provider);
}

function WrappedApp(){
  return(
    <Web3ReactProvider getLibrary={getLibrary}>
      <App/>
    </Web3ReactProvider>
  )
}

export default WrappedApp;
