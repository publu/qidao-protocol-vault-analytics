import React, { useEffect } from 'react'
import HubList from './components/maihub/HubList'
import {anySwapData, endblockData, hubData} from './Connectors/HubData'
import LaoLogoLightMode from './imgs/logos/lao-black-outline.svg'
import MultichainLogoLightMode from './imgs/logos/multichain-black-outline.png'
import LaoLogoDarkMode from './imgs/logos/lao-white-outline.svg'
import MultichainLogoDarkMode from './imgs/logos/multichain-white-outline.png'
import AllBridgeChainLogo from './imgs/logos/allbridge-icon.svg'
import { useColorScheme } from 'use-color-scheme'
import { AllBridgeChainList } from './components/allbridge/AllBridgeList'
import NetworkList from './components/Network/NetworkList'
import MasterChefEndblockList from "./components/MasterChef/MasterChefEndblockList"
import { MetaMask } from "@web3-react/metamask"
import { initializeConnector } from '@web3-react/core'
import { NetworkButton } from './components/MetaMaskConnectButton'

function App() {
    const { scheme } = useColorScheme()
    const isDarkMode = scheme === 'dark'
    return (
        <div className={'container mx-auto p-4'}>
            <NetworkButton title="Connect to Metamask"></NetworkButton>
            <div className="flex justify-center flex-wrap">
                <HubList networkData={hubData} logo={isDarkMode ? LaoLogoDarkMode : LaoLogoLightMode} />
                <NetworkList networkData={anySwapData} logo={isDarkMode ? MultichainLogoDarkMode : MultichainLogoLightMode} />
                <AllBridgeChainList logo={AllBridgeChainLogo} />
                <MasterChefEndblockList networkData={endblockData} />
            </div>
        </div>
    )
}

export default App
