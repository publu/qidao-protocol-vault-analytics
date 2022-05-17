import {ChainId} from '../../Connectors/Chains'
import {NetworkInfo} from '../Network/NetworkInfo'
import React from 'react'
import AllBridgeInfo from './AllBridgeInfo'
import {ConnectorFactory} from "../../Connectors/ConnectorFactory";

export const AllBridgeChainList = ({logo, connectorFactory}: { logo?: any, connectorFactory: ConnectorFactory }) => {
    const connector = connectorFactory.createConnector(ChainId.MATIC)
    return (
        <div
            className="min-w-100 m-6 block flex w-96 flex-col gap-y-4 rounded-lg bg-gray-50 p-6 shadow-md dark:border-gray-700 dark:bg-dm-secondary">
            <div className="flex h-28 text-blue">
                <img className="mx-auto my-auto max-h-full max-w-full" src={logo} alt="Router Liquidity Logo"/>
            </div>
            <NetworkInfo
                networkData={{
                    contractAddress: '0xBBbD1BbB4f9b936C3604906D7592A644071dE884',
                    name: 'Polygon',
                    chainId: ChainId.MATIC,
                }}
                connector={connector}
            />
            <AllBridgeInfo/>
        </div>
    )
}
