import React from 'react'
import NetworkList from './NetworkList'
import {anySwapData, hubData} from './Connectors/HubData'
import LaoLogo from './imgs/logos/lao.svg'
import MultichainLogo from './imgs/logos/multichain.png'

function App() {
    return (
        <div className={'container mx-auto p-4'}>
            <div className="flex">
                <NetworkList networkData={hubData} logo={LaoLogo} />
                <NetworkList networkData={anySwapData} logo={MultichainLogo} />
            </div>
        </div>
    )
}

export default App
