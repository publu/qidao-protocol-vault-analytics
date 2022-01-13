import React from "react";
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from "ethers";
import NetworkInfo from "./NetworkInfo";
import networkData from "./utils/networkData";

const NetworkList = () => {
  return (
    <div className="flex flex-wrap w-100">
      {networkData.map((network, key) => {
          function getLibrary(provider, _) {
            return new ethers.providers.JsonRpcProvider(network.rpcUrl);
          }
          return (
            <Web3ReactProvider key={key} getLibrary={getLibrary}>
              <NetworkInfo networkData={network} />
            </Web3ReactProvider>        
          )
      })}
    </div>
  )
}

export default NetworkList;
