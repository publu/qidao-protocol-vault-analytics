import { initializeConnector } from '@web3-react/core'
import { Network } from '@web3-react/network'
import { ChainId, URLS } from './Connectors/Chains'
import { NetworkInfo } from './NetworkInfo'
import React from 'react'
import AllBridgeInfo from './AllBridgeInfo'

export const AllBridgeChainList = ({ logo }: { logo?: any }) => {
    const connector = initializeConnector<Network>(
        (actions) => new Network(actions, URLS),
        Object.keys(URLS).map((chainId) => Number(chainId))
    )
    return (
        <div className="min-w-100 m-6 block flex w-96 flex-col gap-y-4 rounded-lg bg-gray-50 p-6 shadow-md dark:border-gray-700 dark:bg-dm-secondary">
            <div className="flex h-28 text-blue">
                <img className="mx-auto my-auto max-h-full max-w-full" src={logo} alt="Router Liquidity Logo" />
            </div>
            <AllBridgeInfo />
            <NetworkInfo
                networkData={{
                    hub: '0xBBbD1BbB4f9b936C3604906D7592A644071dE884',
                    name: 'Polygon Chain',
                    chainId: ChainId.MATIC,
                }}
                connector={connector}
            />
        </div>
    )
}
