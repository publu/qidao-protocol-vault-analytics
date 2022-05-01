import React, { useEffect } from "react"
import { metaMask, useIsActive, useProvider, useChainId, useIsActivating} from "../Connectors/Metamask"

export const NetworkButton : React.FC<{title:string}> = ({children, title})=> {
    
    const active = useIsActive()
    const isActivating = useIsActivating()
    const provider = useProvider()
    const chainId = useChainId()

    useEffect(() => {
        metaMask.connectEagerly()
    }, [])

    if (active) {
        return (<button onClick={() => metaMask.activate()} title={title}>
        <h3 style={{color: "white"}}>Connected</h3></button>)
    }

    console.log({active, isActivating, provider, chainId})

    return (<button onClick={() => metaMask.activate()} title={title}>
        <h3 style={{color: "white"}}>Connect to Metamask</h3></button>)
    // Create a button with some text to act as a button, add it into the app, have the button prompt us to connect to metamask
}