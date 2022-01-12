import '../index.css';
import '../App.css';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core';
import { ethers } from "ethers";
import { InjectedConnector } from '@web3-react/injected-connector';

import React, { useState } from "react";

import NetworkList from "./NetworkList";

const injected = new InjectedConnector();
function App() {
  const { library, connector, chainId, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
      console.log({library,  connector, })
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
      <div className="App">
        <header className="App-header">
          <title></title>
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
  return new ethers.providers.Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

function WrappedApp(){
  return(
    <Web3ReactProvider getLibrary={getLibrary}>
      <App/>
    </Web3ReactProvider>
  )
}

export default WrappedApp;
