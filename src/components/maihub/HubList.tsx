import React from 'react'
import { HubInfo } from './HubInfo'
import { initializeConnector } from '@web3-react/core'
import { Network } from '@web3-react/network'
import { URLS } from '../../Connectors/Chains'
import { AddressData } from '../../Connectors/HubData'
import NewTokenModal from "../Modal";

const HubList = ({ networkData, logo }: { networkData: AddressData[]; logo?: any }) => {
    return (
        <div className="min-w-100 m-6 block flex w-96 flex-col gap-y-4 rounded-lg bg-gray-50 p-6 shadow-md dark:border-gray-700 dark:bg-dm-secondary">
            <div className="flex h-28 text-blue">
                <img className="mx-auto my-auto max-h-full max-w-full" src={logo} alt="Router Liquidity Logo" />
            </div>
            <NewTokenModal/>
            {networkData.map((network, key) => {
                const connector = initializeConnector<Network>(
                    (actions) => new Network(actions, URLS),
                    Object.keys(URLS).map((chainId) => Number(chainId))
                )
                return <HubInfo key={key} hubData={network} connector={connector} />
            })}
        </div>
    )
}

export default HubList
