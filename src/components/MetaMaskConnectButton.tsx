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
        return (<button className="bg-gray-700 hover:bg-gray-800 text-white font-bold
    py-2 px-4 border border-blue-700 rounded"
                        onClick={() => metaMask.activate()} title={title}>
        <h3 style={{color: "white"}}>Connected</h3></button>)
    }

    console.log({active, isActivating, provider, chainId})

    return (<button className="bg-gray-700 hover:bg-gray-800 text-white font-bold
    py-2 px-4 border border-blue-700 rounded"
                    onClick={() => metaMask.activate()} title={title}>
        <h3 style={{color: "white"}}>Connect to Metamask</h3></button>)
    
}