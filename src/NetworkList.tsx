import React from 'react'
import {NetworkInfo} from './NetworkInfo'
import {initializeConnector} from '@web3-react/core'
import {Network} from '@web3-react/network'
import {URLS} from './Connectors/Chains'
import {AddressData} from './Connectors/HubData'

const NetworkList = ({ networkData, logo }: { networkData: AddressData[]; logo?: any }) => {
    return (
        <div className="flex flex-col w-96 gap-y-4 block p-6 m-6 min-w-100 bg-white rounded-lg shadow-md dark:bg-dm-secondary dark:border-gray-700">
            <div className="flex h-28">
                <img className="mx-auto my-auto max-w-full max-h-full" src={logo} alt="Router Liquidity Logo" />
            </div>
            {networkData.map((network, key) => {
                const connector = initializeConnector<Network>(
                    (actions) => new Network(actions, URLS),
                    Object.keys(URLS).map((chainId) => Number(chainId))
                )
                return <NetworkInfo key={key} networkData={network} connector={connector} />
            })}
        </div>
    )
}

export default NetworkList
