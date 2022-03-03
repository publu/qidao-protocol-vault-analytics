import React from 'react'
import HubList from './components/maihub/HubList'
import { anySwapData, hubData } from './Connectors/HubData'
import LaoLogoLightMode from './imgs/logos/lao-black-outline.svg'
import MultichainLogoLightMode from './imgs/logos/multichain-black-outline.png'
import LaoLogoDarkMode from './imgs/logos/lao-white-outline.svg'
import MultichainLogoDarkMode from './imgs/logos/multichain-white-outline.png'
import AllBridgeChainLogo from './imgs/logos/allbridge-icon.svg'
import { useColorScheme } from 'use-color-scheme'
import { AllBridgeChainList } from './components/allbridge/AllBridgeList'
import NetworkList from './components/Network/NetworkList'

function App() {
    const { scheme } = useColorScheme()
    const isDarkMode = scheme === 'dark'
    return (
        <div className={'container mx-auto p-4'}>
            <div className="flex flex-wrap">
                <HubList networkData={hubData} logo={isDarkMode ? LaoLogoDarkMode : LaoLogoLightMode} />
                <NetworkList networkData={anySwapData} logo={isDarkMode ? MultichainLogoDarkMode : MultichainLogoLightMode} />
                <AllBridgeChainList logo={AllBridgeChainLogo} />
            </div>
        </div>
    )
}

export default App
