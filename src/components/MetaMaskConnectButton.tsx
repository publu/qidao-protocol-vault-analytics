import React, { useEffect } from "react"
import { initializeConnector } from '@web3-react/core'
import { MetaMask } from "@web3-react/metamask"


export const NetworkButton : React.FC<{title:string}> = ({children, title})=> {
    const [metaMask, hooks] = initializeConnector<MetaMask>((actions) => new MetaMask(actions))
    const { useIsActive, useProvider, useChainId, useIsActivating } = hooks
    const active = useIsActive()
    const isActivating = useIsActivating()
    const provider = useProvider()
    const chainId = useChainId()

    return (<button onClick={() => {
        console.log("First log")
        console.log(metaMask.activate())
        console.log("Second log")}} title={title}>
        <h3 style={{color: "white"}}>Connect to Metamask</h3></button>)
    // Create a button with some text to act as a button, add it into the app, have the button prompt us to connect to metamask
}