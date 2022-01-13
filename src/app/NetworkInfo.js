import React, { useState, useEffect } from "react";
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { ethers } from "ethers";
import maiAbi from "../maiAbi.json";
import { formatAmount } from "./utils/utils";
const injected = new InjectedConnector();

const NetworkInfo = ({ networkData }) => {
  const { active, library, activate} = useWeb3React();
  const { hub, mai, name } = networkData;
  const [hubBalance, setBalance] = useState("0");
  const [isConnected, connectStatus] = useState(false);
  const maiContract = new ethers.Contract(mai, maiAbi, library);
  async function connect() {
    try {
      await activate(injected);
      connectStatus(true);
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    async function fetchHubBalance() {
      if(!isConnected) {
        connect();
      }
      if (active) {
        setBalance(formatAmount(await maiContract.balanceOf(hub), name));
      }
    }
    fetchHubBalance();
  }, [active, isConnected])  
  
  return (
    <div className="w-100 pa3 mb2 br4 ba b--white-40">
        <div className="mb2">{name}</div>
        <div>Hub balance: {hubBalance}</div>
    </div>
  )
}

export default NetworkInfo;
