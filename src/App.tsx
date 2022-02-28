import React from 'react'
import NetworkList from './NetworkList'
import { anySwapData, hubData } from './Connectors/HubData'
import LaoLogoLightMode from './imgs/logos/lao-black-outline.svg'
import MultichainLogoLightMode from './imgs/logos/multichain-black-outline.png'
import LaoLogoDarkMode from './imgs/logos/lao-white-outline.svg'
import MultichainLogoDarkMode from './imgs/logos/multichain-white-outline.png'
import AllBridgeChainLogo from './imgs/logos/allbridge-icon.svg'
import { useColorScheme } from 'use-color-scheme'
import { AllBridgeChainList } from './AllBridgeList'

function App() {
    const { scheme } = useColorScheme()
    const isDarkMode = scheme === 'dark'
    return (
        <div className={'container mx-auto p-4'}>
            <div className="flex">
                <NetworkList networkData={hubData} logo={isDarkMode ? LaoLogoDarkMode : LaoLogoLightMode} />
                <NetworkList networkData={anySwapData} logo={isDarkMode ? MultichainLogoDarkMode : MultichainLogoLightMode} />
                {/*<RelayChainList networkData={anySwapData} logo={RelayChainLogo} />*/}
                <AllBridgeChainList logo={AllBridgeChainLogo} />
            </div>
        </div>
    )
}

export default App
